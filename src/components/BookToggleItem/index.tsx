import Button from '@/components/Button';
import ChevronDown from '@/assets/icons/shevron-down.svg';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import TogglePane from './TogglePane';
import CompactPane from './CompactPane';

interface Props {
  thumbnail: string;
  title: string;
  authors: string[];
  contents: string;
  price: number;
  salePrice: number;
  url: string;
  open?: boolean;
}

export default function BookToggleItem({
  thumbnail,
  title,
  authors,
  contents,
  price,
  salePrice,
  url,
  open: injectedOpen = false,
}: Props) {
  const [open, setOpen] = useState(injectedOpen);
  const stringifiedAuthors = authors?.join(', ');
  const toggleButton = (
    <Button
      className={cn({ '[&_svg]:rotate-180': open })}
      onClick={() => setOpen((prev) => !prev)}
      variant="secondary"
      size="lg"
    >
      상세보기
      <ChevronDown />
    </Button>
  );
  return (
    <div className="flex flex-col gap-12">
      {open ? (
        <TogglePane
          thumbnail={thumbnail}
          title={title}
          authors={stringifiedAuthors}
          contents={contents}
          price={price}
          salePrice={salePrice}
          url={url}
          toggleButton={toggleButton}
        />
      ) : (
        <CompactPane
          thumbnail={thumbnail}
          title={title}
          authors={stringifiedAuthors}
          price={price}
          url={url}
          toggleButton={toggleButton}
        />
      )}
    </div>
  );
}
