import { Book } from '@/types/book';
import { useState } from 'react';

const DEFAULT_PAGE_SIZE = 10;
export default function useCartPagenation({
  cart,
  size = DEFAULT_PAGE_SIZE,
}: {
  cart: Book[];
  size?: number;
}) {
  const [page, setPage] = useState(1);

  return {
    data: cart.slice(0, page * size),
    fetchNextPage: () => setPage((prev) => prev + 1),
    hasNextPage: cart.length > page * size,
  };
}
