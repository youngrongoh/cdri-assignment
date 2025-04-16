import Button from '@/components/Button';
import { Link } from 'react-router';
import { ReactNode } from 'react';

interface Props {
  thumbnail: string;
  title: string;
  authors: string;
  price: number;
  url: string;
  toggleButton: ReactNode;
}

export default function CompactPane({
  thumbnail,
  title,
  authors,
  price,
  url,
  toggleButton,
}: Props) {
  return (
    <div className="flex items-center pl-12 pr-[15px] py-4 bottom-line">
      <img className="max-w-12 w-full h-17 mr-12" src={thumbnail} alt={title} />
      <div className="flex basis-full justify-between gap-5 mr-14">
        <div className="flex basis-full mr-1">
          <span className="mr-4">{title}</span>
          <div>{authors}</div>
        </div>
        <div className="whitespace-nowrap">{price.toLocaleString() + '원'}</div>
      </div>
      <div className="flex gap-2">
        <Button variant="primary" size="lg" asChild>
          <Link to={url} target="_blank">
            구매하기
          </Link>
        </Button>
        {toggleButton}
      </div>
    </div>
  );
}
