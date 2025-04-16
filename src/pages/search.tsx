import BookToggleItem from '@/components/BookToggleItem';
import NoData from '@/components/NoData';
import SearchCount from '@/components/SearchCount';
import SearchForm from '@/components/SearchForm';
import { useBookSearch } from '@/lib/hooks/service/useBookSearch';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useSearchParams } from 'react-router';

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
  } = useBookSearch({ query: { query, target } });
  const hasItems = data && data?.length > 0;

  const [infiniteRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: Boolean(error),
    rootMargin: '0px 0px 400px 0px',
  });

  return (
    <main>
      <section className="flex justify-center mb-12">
        <div className="flex flex-col gap-6">
          <h1 className="typo-title2">도서 검색</h1>
          <SearchForm />
          <SearchCount label="도서 검색 결과" count={20} />
        </div>
      </section>
      <section>
        {hasItems ? (
          <ul>
            {data?.map((item) => <BookToggleItem {...item} />)}
            {hasNextPage && (
              <div
                ref={infiniteRef}
                className="flex items-center justify-center"
              >
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-transparent border-gray-500" />
              </div>
            )}
          </ul>
        ) : (
          <NoData />
        )}
      </section>
    </main>
  );
}
