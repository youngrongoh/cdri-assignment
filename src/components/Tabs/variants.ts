import createVariantContext from '@/lib/styles/variant-context';
import { tv, VariantProps } from 'tailwind-variants';

export const tabs = tv({
  slots: {
    root: 'flex flex-col gap-2',
    list: 'inline-flex w-fit items-center justify-center',
    trigger:
      "inline-flex flex-1 items-center justify-center border border-transparent whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    content: 'flex-1 outline-none',
  },
  variants: {
    variant: {
      default: {
        root: 'h-9 rounded-lg p-[3px]',
        list: 'bg-muted text-muted-foreground',
        trigger:
          'h-[calc(100%-1px)] gap-1.5 rounded-md px-2 py-1 text-sm font-medium data-[state=active]:bg-background dark:data-[state=active]:text-foreground transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 data-[state=active]:shadow-sm text-foreground dark:text-muted-foreground',
      },
      underline: {
        list: 'gap-2 mt-[2px] -mb-[2px]',
        trigger:
          'data-[state=active]:border-b-primary border-b-1px pb-1 typo-body1 text-primary',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type Variants = VariantProps<typeof tabs>;
const [TabsVariantsProvider, useTabsVariants] = createVariantContext<Variants>({
  variant: 'underline',
});
export { TabsVariantsProvider, useTabsVariants };
