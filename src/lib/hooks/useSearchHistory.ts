import { useLocalStorage } from 'react-use';

export type SearchHistoryItem = string;

export default function useSearchHistory<T extends SearchHistoryItem>(
  storeLimit: number,
) {
  const [searchHistory = [], storeSearchHistory] = useLocalStorage<T[]>(
    'search-history',
    [],
  );

  const add = (keyword: T) => {
    const organized = organize([keyword, ...searchHistory]);
    storeSearchHistory(organized);
  };

  const organize = (history: T[]) => {
    const latest = history[0];
    const duplicatedItemIndex =
      history.slice(1).findIndex((item) => item === latest) + 1;

    const newHistory =
      duplicatedItemIndex < 0
        ? [
            ...history.slice(0, duplicatedItemIndex),
            ...history.slice(duplicatedItemIndex + 1),
          ]
        : [...history];

    const isOverflow = newHistory.length >= storeLimit;
    if (!isOverflow) {
      return newHistory;
    }

    const newStartIndex = newHistory.length - storeLimit;
    return newHistory.slice(newStartIndex);
  };

  const remove = (keyword: T) => {
    const index = searchHistory.findIndex((item) => item === keyword);
    if (index < 0) return;
    const newHistory = [
      ...searchHistory.slice(0, index),
      ...searchHistory.slice(index + 1),
    ];
    storeSearchHistory(newHistory);
  };

  return {
    searchHistory,
    addHistory: add,
    removeHistory: remove,
  };
}
