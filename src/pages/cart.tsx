import BookToggleItem from '@/components/BookToggleItem';
import NoData from '@/components/NoData';
import SearchCount from '@/components/SearchCount';
import useCartPagenation from '@/lib/hooks/useCartPagenation';
import useCartStore from '@/lib/hooks/useCartStore';
import useInfiniteScroll from 'react-infinite-scroll-hook';

export default function CartPage() {
  const { cart, toggle: toggleBookCart } = useCartStore();

  const {
    data: items,
    fetchNextPage,
    hasNextPage,
  } = useCartPagenation({ cart });

  const hasItems = items.length > 0;

  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: !hasNextPage,
    rootMargin: '0px 0px 300px 0px',
  });

  return (
    <main>
      <section className="w-full flex justify-center mb-12">
        <div className="w-[480px] flex flex-col gap-6">
          <h1 className="typo-title2">내가 찜한 책</h1>
          <SearchCount label="찜한 책" count={items?.length ?? 0} />
        </div>
      </section>
      <section>
        {hasItems ? (
          <ul>
            {items?.map((item) => (
              <BookToggleItem
                key={item.isbn}
                {...item}
                like
                onLikeClick={() => toggleBookCart(item)}
              />
            ))}
            {hasNextPage && <div ref={infiniteRef}></div>}
          </ul>
        ) : (
          <NoData />
        )}
      </section>
    </main>
  );
}
