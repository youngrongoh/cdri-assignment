import BookToggleItem from '@/components/BookToggleItem';
import NoData from '@/components/NoData';
import SearchCount from '@/components/SearchCount';
import SearchForm from '@/components/SearchForm';
import {
  getBookSearchQuery,
  useBookSearch,
} from '@/lib/hooks/service/useBookSearch';
import useCartStore from '@/lib/hooks/useCartStore';
import queryClient from '@/lib/query-client';
import { useMemo } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { LoaderFunction, useSearchParams } from 'react-router';

export const searchPageLoader: LoaderFunction = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  if (searchParams.size === 0) return null;

  const query = searchParams.get('q') ?? '';
  const target = searchParams.get('target') ?? '';
  const { queryKey, queryFn } = getBookSearchQuery({
    query,
    target,
    infinite: true,
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn: () => queryFn({ query, target }, 1),
    initialPageParam: 1,
  });

  return null;
};

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const target = searchParams.get('target') ?? '';

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
    isFetchingNextPage,
  } = useBookSearch({ query, target });

  const { cart, toggle: toggleBookCart } = useCartStore();
  const isbns = useMemo(() => cart.map(({ isbn }) => isbn), [cart]);

  const items = data?.pages
    .flatMap((page) => page.documents)
    .map(({ sale_price, ...item }) => ({
      ...item,
      salePrice: sale_price,
      like: isbns.includes(item.isbn),
    }));

  const hasItems = items && items?.length > 0;

  const loading = isLoading || isFetchingNextPage;
  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: Boolean(error) || !hasNextPage,
    rootMargin: '0px 0px 300px 0px',
  });

  return (
    <main>
      <section className="w-full flex justify-center mb-12">
        <div className="w-[480px] flex flex-col gap-6">
          <h1 className="typo-title2">도서 검색</h1>
          <SearchForm defaultValue={{ search: query, target }} />
          <SearchCount label="도서 검색 결과" count={items?.length ?? 0} />
        </div>
      </section>
      <section>
        {hasItems ? (
          <ul>
            {items?.map((item) => (
              <BookToggleItem
                key={item.isbn}
                {...item}
                onLikeClick={() => toggleBookCart(item)}
              />
            ))}
            {!loading && hasNextPage && <div ref={infiniteRef}></div>}
            {loading && (
              <div
                ref={infiniteRef}
                className="flex items-center justify-center p-5"
              >
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-transparent border-gray-500" />
              </div>
            )}
          </ul>
        ) : (
          <NoData text="검색된 결과가 없습니다." />
        )}
      </section>
    </main>
  );
}
