interface Props {
  label: string;
  count: number;
}

export default function SearchInput({ label, count }: Props) {
  return (
    <div className="flex gap-4 typo-caption text-primary">
      {label}
      <span>
        총{' '}
        <strong className="font-medium text-[var(--color-primary)]">
          {count}
        </strong>
        건
      </span>
    </div>
  );
}
