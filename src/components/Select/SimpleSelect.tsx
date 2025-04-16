import { ComponentProps, ReactNode } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';

type SelectItem = { label: string; value: string };
interface Props<T extends SelectItem> extends ComponentProps<typeof Select> {
  placeholder?: string;
  items?: T[];
  render?: (items: T[]) => ReactNode;
}

export default function SimpleSelect<T extends SelectItem>({
  items = [],
  placeholder,
  render,
  children,
  ...props
}: Props<T>) {
  const renderItems = render ?? renderDefault;
  return (
    <Select {...props}>
      <SelectTrigger>
        {children || <SelectValue placeholder={placeholder} />}
      </SelectTrigger>
      <SelectContent>{renderItems(items)}</SelectContent>
    </Select>
  );
}

const renderDefault = <T extends SelectItem>(items: T[]) =>
  items?.map(({ label, value }) => (
    <SelectItem key={value} value={value}>
      {label}
    </SelectItem>
  ));
