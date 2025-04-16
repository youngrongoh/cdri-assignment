import { ComponentProps } from 'react';
import { Select as SlotSelect } from './Select';
import SimpleSelect from './SimpleSelect';

export {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './Select';

type Props =
  | (ComponentProps<typeof SlotSelect> & { variant: 'slot' })
  | (ComponentProps<typeof SimpleSelect> & { variant?: 'default' });

export default function Select(props: Props) {
  if (props.variant === 'slot') {
    return <SlotSelect {...props} />;
  } else {
    return <SimpleSelect {...props} />;
  }
}
