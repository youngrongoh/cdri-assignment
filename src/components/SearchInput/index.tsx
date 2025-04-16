import Input from '@/components/Input';
import {
  ChangeEventHandler,
  ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Search from '@/assets/icons/search.svg';
import { Popover, PopoverAnchor, PopoverContent } from '@/components/Popover';
import { useClickAway, useKeyPressEvent } from 'react-use';
import HistoryList from './HistoryList';

interface Props extends ComponentProps<typeof Input> {
  searchHistory: ComponentProps<typeof HistoryList>['items'];
  historyOpen?: boolean;
  onHistoryRemove?: (keyword: string) => void;
}

export default function SearchInput({
  searchHistory = [],
  historyOpen = false,
  onChange,
  onHistoryRemove,
  ...props
}: Props) {
  const hasHistories = searchHistory.length > 0;
  const [open, setOpen] = useState(hasHistories && historyOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const togglePopover = useCallback(
    (open: boolean) => {
      if (open && !hasHistories) return;
      setOpen(open);
    },
    [hasHistories],
  );

  useClickAway(contentRef, () => {
    togglePopover(false);
  });

  useKeyPressEvent(
    'Enter',
    () => {},
    () => setOpen(false),
  );

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    const hasValue = value.length > 0;
    togglePopover(hasValue);
    onChange?.(event);
  };

  useEffect(() => {
    if (searchHistory.length > 0) return;
    togglePopover(false);
  }, [searchHistory, togglePopover]);

  return (
    <div className="w-full">
      <Popover open={open}>
        <PopoverAnchor>
          <Input
            {...props}
            className={`transition-[border-radius] ${open ? 'rounded-3xl rounded-b-none animate-input-merge' : ''}`}
            ref={inputRef}
            prefix={<Search />}
            onChange={handleInputChange}
          />
        </PopoverAnchor>
        <PopoverContent
          ref={contentRef}
          variant="search"
          transition="search"
          style={{
            width:
              inputRef.current?.parentElement?.getBoundingClientRect().width,
          }}
          sideOffset={0}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <HistoryList items={searchHistory} onRemoveClick={onHistoryRemove} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
