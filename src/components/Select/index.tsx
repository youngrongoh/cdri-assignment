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
  | (ComponentProps<typeof SlotSelect> & { slot: true })
  | (ComponentProps<typeof SimpleSelect> & { slot?: false });

export default function Select(props: Props) {
  if (props.slot) {
    return <SlotSelect {...props} />;
  } else {
    return <SimpleSelect {...props} />;
  }
}
