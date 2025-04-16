import BookImage from '@/assets/icons/book.svg';

export default function NoData() {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center gap-6">
      <BookImage />
      <p className="typo-caption text-secondary">검색된 결과가 없습니다.</p>
    </div>
  );
}
