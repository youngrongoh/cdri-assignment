import { createContext, FunctionComponent, useContext } from 'react';
import { VariantProps } from 'tailwind-variants';

const createVariantContext = <T extends VariantProps<FunctionComponent>>(
  initialContext: T,
) => {
  const context = createContext<T>(initialContext);
  const Provider = context.Provider;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const hook = () => useContext(context);
  return [Provider, hook] as const;
};

export default createVariantContext;
