import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import { fetchBooks, BookResponse } from '@/lib/api/kakao';

export const DEFAULT_PAGE_SIZE = 10;
export const getBookSearchQuery = (filter: {
  query: string;
  target?: string;
  infinite?: boolean;
}) => ({
  queryKey: ['book', filter] as const,
  queryFn: (...args: Parameters<typeof fetchBooks>) =>
    fetchBooks(args[0], args[1], args[2] ?? DEFAULT_PAGE_SIZE),
});

interface UseBookSearchParameters {
  query: string;
  target?: string;
  size?: number;
}

export function useBookSearch({
  query,
  target,
  size,
}: UseBookSearchParameters) {
  const { queryKey, queryFn } = getBookSearchQuery({
    query,
    target,
    infinite: true,
  });
  return useInfiniteQuery<
    BookResponse,
    Error,
    InfiniteData<BookResponse, number>,
    ReturnType<typeof getBookSearchQuery>['queryKey'],
    number
  >({
    queryKey,
    queryFn: ({ pageParam = 1 }) => queryFn({ query, target }, pageParam, size),
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.meta?.is_end ? undefined : allPages?.length + 1,
    enabled: !!query,
    initialPageParam: 1,
  });
}
