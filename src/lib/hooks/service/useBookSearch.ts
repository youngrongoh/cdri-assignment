import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchBooks, BookResponse } from '@/lib/api/kakao';

interface Props {
  query: string;
  target?: string;
  size?: number;
}
const DEFAULT_PAGE_SIZE = 10;
export function useBookSearch({
  query,
  target,
  size = DEFAULT_PAGE_SIZE,
}: Props) {
  return useInfiniteQuery<
    BookResponse,
    Error,
    BookResponse[],
    ['book', typeof query],
    number
  >({
    queryKey: ['book', query],
    queryFn: ({ pageParam = 1 }) =>
      fetchBooks({ query, target }, pageParam, size),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.meta.is_end ? undefined : allPages.length + 1,
    enabled: !!query,
    initialPageParam: 1,
    select: ({ pages }) => pages,
  });
}
