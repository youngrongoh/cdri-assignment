import Button from '@/components/Button';
import Like from '@/assets/icons/like.svg';
import Unlike from '@/assets/icons/unlike.svg';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export default function LikeButton({
  className,
  like = false,
  ...props
}: ComponentProps<typeof Button> & { like?: boolean }) {
  return (
    <Button
      {...props}
      variant="default"
      size="icon"
      className={cn(
        !like &&
          'hover:[&_svg]:brightness-80 hover:[&_svg]:grayscale-10 [&_svg]:transition-all',
        className,
      )}
    >
      {like ? <Like /> : <Unlike />}
    </Button>
  );
}
