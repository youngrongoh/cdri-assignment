import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default:
          'hover:[&_svg]:brightness-150 hover:[&_svg]:grayscale-20 [&_svg]:transition-all',
        primary: 'bg-primary text-white typo-caption hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary hover:filter-bg-secondary/80',
        outline:
          'text-subtitle border border-button-outline bg-transparent hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        ghost: 'hover:bg-accent hover:brightness-95 dark:hover:bg-accent/80',
      },
      size: {
        default: 'rounded-sm px-1',
        sm: 'h-[35px] typo-body2 rounded-md gap-1.5 px-[10px] py-[5px] [&_svg]:typo-small',
        lg: 'h-12 typo-caption rounded-md px-5 py-[13px] [&_svg]:typo-body2',
        block: 'h-10 typo-caption rounded-md px-6 [&_svg]:typo-body2',
        icon: "[&_svg:not([class*='size-'])]:size-full",
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export default buttonVariants;
