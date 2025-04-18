import { ComponentProps, ReactNode } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import Close from '@/assets/icons/close.svg';
import { tv, VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';

function Popover({ ...props }: ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

const content = tv({
  base: '',
  variants: {
    variant: {
      default:
        'bg-popover text-popover-foreground z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
      search:
        'bg-lightgray rounded-3xl rounded-t-none border-none shadow-none origin-(--radix-popover-content-transform-origin) p-4 outline-hidden',
    },
    transition: {
      default:
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      search:
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-20 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    transition: 'default',
  },
});

type Variants = VariantProps<typeof content>;

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  variant,
  transition,
  children,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content> & Variants) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={content({ variant, transition, className })}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

interface PopoverCloseProps {
  className?: string;
  children?: ReactNode;
}

function PopoverClose({ className, children }: PopoverCloseProps) {
  return (
    <PopoverPrimitive.Close
      className={cn(
        'absolute top-0 right-0 p-2 [&_svg]:text-[12px]',
        {
          '[&_svg]:text-[20px] hover:[&_svg]:brightness-85 hover:[&_svg]:grayscale-0':
            !children,
        },
        className,
      )}
    >
      {children ?? <Close />}
    </PopoverPrimitive.Close>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverClose };
