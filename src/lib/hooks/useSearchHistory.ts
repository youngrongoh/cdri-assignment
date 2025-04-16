import { useLocalStorage } from 'react-use';

export type SearchHistoryItem = string;

export default function useSearchHistory<T extends SearchHistoryItem>(
  storeLimit: number,
) {
  const [searchHistory = [], storeSearchHistory] = useLocalStorage<T[]>(
    'search-history',
    [],
  );
  const add = (keyword: string) => {
    const organized = organize([...searchHistory, keyword as T]);
    storeSearchHistory(organized);
  };

  const organize = (history: T[]) => {
    const copied = [...history];
    const isOverflow = copied.length >= storeLimit;
    if (!isOverflow) {
      return copied;
    }

    const newStartIndex = copied.length - storeLimit;
    return copied.slice(newStartIndex);
  };
  return {
    searchHistory,
    addHistory: add,
  };
}
