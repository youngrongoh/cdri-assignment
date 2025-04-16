import Button from '@/components/Button';
import Remove from '@/assets/icons/remove.svg';
import { SearchHistoryItem } from '@/lib/hooks/useSearchHistory';

interface Props {
  items: SearchHistoryItem[];
  onRemoveClick?: (keyword: string) => void;
}

export default function HistoryList({ items, onRemoveClick }: Props) {
  return (
    <ul className="flex flex-col gap-4 ml-7">
      {items.map((keyword, i) => (
        <li key={keyword + i} className="flex justify-between">
          <Button className="typo-caption text-subtitle">{keyword}</Button>
          <Button
            className="size-6"
            variant="default"
            size="icon"
            onClick={() => onRemoveClick?.(keyword)}
          >
            <Remove />
          </Button>
        </li>
      ))}
    </ul>
  );
}
