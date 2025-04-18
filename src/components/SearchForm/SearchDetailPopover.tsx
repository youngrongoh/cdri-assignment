import { ComponentProps, ReactNode } from 'react';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/Popover';
import Button from '../Button';

interface Props {
  children?: ReactNode;
  form?: string;
  submitText: string;
  triggerText: string;
  open?: boolean;
  onOpenChange?: ComponentProps<typeof Popover>['onOpenChange'];
}
export default function SearchDetailPopover({
  triggerText,
  submitText,
  form,
  children,
  open,
  onOpenChange,
}: Props) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" type="button">
          {triggerText}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-4 w-[360px] border-0 shadow-[0_4px_14px_6px_rgba(151,_151,_151,_0.15)]">
        {children}
        <Button variant="primary" size="block" type="submit" form={form}>
          {submitText}
        </Button>
        <PopoverClose />
      </PopoverContent>
    </Popover>
  );
}
