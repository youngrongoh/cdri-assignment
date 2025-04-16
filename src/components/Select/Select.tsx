import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { tv, VariantProps } from 'tailwind-variants';
import createVariantContext from '@/lib/contexts/variant-context';

const selectVariants = tv({
  slots: {
    trigger: [
      'flex w-fit items-center justify-between gap-2 outline-none whitespace-nowrap transition-[color,box-shadow] [&_svg]:pointer-events-none [&_svg]:shrink-0 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8',
      '*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',
    ],
    content: ['z-50'],
    selectItem: [
      'relative flex w-full cursor-default items-center gap-2 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    viewport: '',
  },
  variants: {
    variant: {
      default: {
        trigger: [
          'border border-input rounded-md bg-transparent px-3 py-2 text-sm shadow-xs',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'data-[placeholder]:text-muted-foreground',
          "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4",
          'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
          'dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50',
        ],
        content: [
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
        ],
        selectItem: [
          "focus:bg-accent focus:text-accent-foreground rounded-sm py-1.5 pr-8 pl-2 text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
          "[&_svg:not([class*='text-'])]:text-muted-foreground",
        ],
        viewport: 'p-1',
      },
      underline: {
        trigger: [
          'border-b-1 border-b-[#D2D6DA] bg-transparent font-bold typo-body2 pl-2 pr-1',
          'not-[data-placeholder]:text-primary',
          "[&_svg:not([class*='text-'])]:text-gray [&_svg:not([class*='size-'])]:size-5",
          'data-[placeholder]:text-lightgray',
        ],
        content: [
          'bg-popover text-subtitle',
          'shadow-[0_0_4px_rgba(0,0,0,0.25)]',
        ],
        selectItem: [
          'h-[30px] px-2 hover:bg-lightgray data-[state="checked"]:hidden',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type Variants = VariantProps<typeof selectVariants>;
const [VariantsProvider, useVariants] = createVariantContext<Variants>({
  variant: 'underline',
});
const { trigger, content, viewport, selectItem } = selectVariants();

function Select({
  variant,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root> & Variants) {
  return (
    <VariantsProvider value={{ variant }}>
      <SelectPrimitive.Root data-slot="select" {...props} />
    </VariantsProvider>
  );
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default';
}) {
  const { variant } = useVariants();
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={trigger({ variant, className })}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  const { variant } = useVariants();
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          content({ variant }),
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            viewport({ variant }),
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  const { variant } = useVariants();
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={selectItem({ variant, className })}
      {...props}
    >
      {variant !== 'underline' && (
        <span className="absolute right-2 flex size-3.5 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <CheckIcon className="size-4" />
          </SelectPrimitive.ItemIndicator>
        </span>
      )}
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
