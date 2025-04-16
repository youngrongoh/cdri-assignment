import Button from '@/components/Button';
import { Link } from 'react-router';
import { ReactNode } from 'react';
import { toCurrency } from '@/lib/utils';
import noCoverImage from '@/assets/images/no-cover.png';
import LikeButton from '../LikeButton';

interface Props {
  thumbnail: string;
  title: string;
  authors: string;
  price: number;
  url: string;
  like?: boolean;
  toggleButton: ReactNode;
  onLikeClick?: () => void;
}

export default function CompactPane({
  thumbnail,
  title,
  authors,
  price,
  url,
  like,
  toggleButton,
  onLikeClick,
}: Props) {
  const hasThumbnail = thumbnail.trim().length > 0;
  const hasPrice = !!price && price > 0;
  return (
    <div className="flex items-center pl-12 pr-[15px] py-4 bottom-line">
      <div className="relative max-w-12 w-full h-17 mr-12">
        <img
          className="w-full h-full"
          src={hasThumbnail ? thumbnail : noCoverImage}
          alt={title}
        />
        <LikeButton
          className="absolute top-0 right-0 [&_svg]:size-4!"
          like={like}
          onClick={onLikeClick}
        />
      </div>
      <div className="flex basis-full justify-between gap-5 mr-14">
        <div className="flex basis-full mr-1">
          <span className="mr-4">{title}</span>
          <div>{authors}</div>
        </div>
        {hasPrice && (
          <div className="whitespace-nowrap">{toCurrency(price, 'ko')}</div>
        )}
      </div>
      <div className="flex gap-2">
        <Button variant={hasPrice ? 'primary' : 'secondary'} size="lg" asChild>
          <Link to={url} target="_blank">
            {hasPrice ? '구매하기' : '재고확인'}
          </Link>
        </Button>
        {toggleButton}
      </div>
    </div>
  );
}
