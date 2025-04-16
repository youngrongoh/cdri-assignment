import BookImage from '@/assets/icons/book.svg';

export default function NoData({ text }: { text: string }) {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center gap-6">
      <BookImage />
      <p className="typo-caption text-secondary">{text}</p>
    </div>
  );
}
