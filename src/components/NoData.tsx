import BookImage from '@/assets/icons/book.svg';

export default function NoData() {
  return (
    <div className="flex flex-col items-center gap-6">
      <BookImage />
      <p className="typo-caption text-secondary">검색된 결과가 없습니다.</p>
    </div>
  );
}
