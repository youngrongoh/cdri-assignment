import Input from '@/components/Input';
import { ChangeEventHandler, ComponentProps, useRef, useState } from 'react';
import Search from '@/assets/icons/search.svg';
import { Popover, PopoverAnchor, PopoverContent } from '@/components/Popover';
import { useClickAway } from 'react-use';
import HistoryList from './HistoryList';

interface Props extends ComponentProps<typeof Input> {
  searchHistory: ComponentProps<typeof HistoryList>['items'];
  historyOpen: boolean;
}

export default function SearchInput({
  searchHistory = [],
  historyOpen = false,
  ...props
}: Props) {
  const hasHistories = searchHistory.length > 0;
  const [open, setOpen] = useState(hasHistories && historyOpen);
  const inputRef = useRef<HTMLInputElement>(null);

  const togglePopover = (open: boolean) => {
    if (open && !hasHistories) return;
    setOpen(open);
  };

  useClickAway(inputRef, () => {
    togglePopover(false);
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    const hasValue = value.length > 0;
    togglePopover(hasValue);
  };

  return (
    <div>
      <Popover open={open}>
        <PopoverAnchor>
          <Input
            className={`transition-[border-radius] ${open ? 'rounded-3xl rounded-b-none animate-input-merge' : ''}`}
            ref={inputRef}
            {...props}
            prefix={<Search />}
            onChange={handleInputChange}
          />
        </PopoverAnchor>
        <PopoverContent
          variant="search"
          transition="search"
          style={{
            width:
              inputRef.current?.parentElement?.getBoundingClientRect().width,
          }}
          sideOffset={0}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <HistoryList items={searchHistory} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
