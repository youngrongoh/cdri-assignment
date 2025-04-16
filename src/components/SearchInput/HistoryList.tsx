import Button from '@/components/Button';
import Close from '@/assets/icons/close.svg';

type SearchHistoryItem = string;
interface Props {
  items: SearchHistoryItem[];
}

export default function HistoryList({ items }: Props) {
  return (
    <ul className="flex flex-col gap-4 ml-7">
      {items.map((keyword) => (
        <li key={keyword} className="flex justify-between">
          <Button className="typo-caption text-subtitle">{keyword}</Button>
          <Button className="size-6" variant="default" size="icon">
            <Close />
          </Button>
        </li>
      ))}
    </ul>
  );
}
