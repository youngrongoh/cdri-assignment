import { ComponentProps, forwardRef, ReactNode } from 'react';
import { inputVaraints, Variants } from './variants';

const { root, prefix: prefixBox, input } = inputVaraints();

type Props = {
  prefix?: ReactNode;
} & Omit<ComponentProps<'input'>, 'prefix'> &
  Variants;

export default forwardRef<HTMLInputElement, Props>(function Input(
  { className, type, prefix, variant, ...props },
  ref,
) {
  return (
    <div className={root({ variant, className })}>
      {prefix && <div className={prefixBox({ variant })}>{prefix}</div>}
      <input
        {...props}
        ref={ref}
        type={type}
        data-slot="input"
        className={input({ variant })}
      />
    </div>
  );
});
