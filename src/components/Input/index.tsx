import { ComponentProps, ReactNode } from 'react';
import { inputVaraints, Variants } from './variants';

const { root, prefix: prefixBox, input } = inputVaraints();

type Props = {
  prefix?: ReactNode;
} & Omit<ComponentProps<'input'>, 'prefix'> &
  Variants;

function Input({ className, type, prefix, variant, ...props }: Props) {
  return (
    <div className={root({ variant, className })}>
      {prefix && (
        <div className={prefixBox({ variant, className })}>{prefix}</div>
      )}
      <input
        type={type}
        data-slot="input"
        className={input({ variant, className })}
        {...props}
      />
    </div>
  );
}

export { Input };
