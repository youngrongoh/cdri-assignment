import { tv, VariantProps } from 'tailwind-variants';

export const inputVaraints = tv({
  slots: {
    root: 'flex gap-[11px] items-center p-2.5',
    prefix: "[&_svg:not([class*='size-'])]:size-full",
    input: [
      'w-full min-w-0',
      'focus-visible:outline-none',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
    ],
  },
  variants: {
    variant: {
      default: {
        root: [
          'bg-lightgray rounded-[100px] has-[>input:first-child]:px-5',
          'has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-ring/50 has-[input:focus-visible]:ring-[1px]',
        ],
        prefix: 'size-[30px]',
        input: 'placeholder:text-subtitle text-black',
      },
      underline: {
        root: 'border-b-1 border-primary bg-transparent pt-[15px] pb-[5px]',
        input:
          'dark:bg-input/30 border-input placeholder:text-subtitle transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      },
    },
  },
});

export type Variants = VariantProps<typeof inputVaraints>;
