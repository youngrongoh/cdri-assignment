import Button from '@/components/Button';
import { Link } from 'react-router';
import { ReactNode } from 'react';
import { toCurrency } from '@/lib/utils';
import LikeButton from '../LikeButton';

interface Props {
  thumbnail: string;
  title: string;
  authors: string;
  contents: string;
  price: number;
  salePrice: number;
  url: string;
  like?: boolean;
  toggleButton: ReactNode;
  onLikeClick?: () => void;
}

export default function TogglePane({
  thumbnail,
  title,
  authors,
  contents,
  price,
  salePrice,
  url,
  like,
  toggleButton,
  onLikeClick,
}: Props) {
  return (
    <div className="flex bottom-line text-primary pl-[54px] pr-[15px] pb-10 pt-4">
      <div className="relative max-w-[210px] w-full max-h-[280px]">
        <img className="w-full h-full" src={thumbnail} alt={title} />
        <LikeButton
          className="absolute top-0 right-0 [&_svg]:size-6!"
          like={like}
          onClick={onLikeClick}
        />
      </div>
      <div className="flex justify-between flex-1">
        <div className="p-6">
          <div className="flex gap-4">
            <h2 className="typo-title3 font-bold mb-4">{title}</h2>
            <p className="typo-body2 text-subtitle">{authors}</p>
          </div>
          <div className="space-y-3">
            <h3 className="typo-body2 leading-[26px] font-bold">책 소개</h3>
            <p className="typo-small leading-4 whitespace-pre-wrap">
              {contents}
            </p>
          </div>
        </div>
        <div className="w-[240px] shrink-0 flex flex-col justify-between items-end text-right mt-[10px]">
          {toggleButton}
          <div className="w-full space-y-7">
            <div className="space-y-2 text-subtitle">
              <p className="typo-small">
                원가{' '}
                <span className="typo-title3 text-primary font-medium line-through ml-2">
                  {toCurrency(price, 'ko')}
                </span>
              </p>
              <p className="typo-small">
                할인가{' '}
                <strong className="typo-title3 text-primary ml-2">
                  {toCurrency(salePrice, 'ko')}
                </strong>
              </p>
            </div>
            <Button variant="primary" size="block" asChild>
              <Link to={url} target="_blank">
                구매하기
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
