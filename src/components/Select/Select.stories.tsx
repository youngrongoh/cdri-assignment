import type { Meta, StoryObj } from '@storybook/react';
import Select, {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '.';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    slot: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const ITEMS = [
  { label: 'item 1', value: '1' },
  { label: 'item 2', value: '2' },
];

export const Default: Story = {
  args: {
    placeholder: 'placeholder',
    items: ITEMS,
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    placeholder: 'placeholder',
    items: ITEMS,
  },
};

export const Slot: Story = {
  args: {
    slot: true,
    children: (
      <>
        <SelectTrigger>
          <SelectValue placeholder="placeholder" />
        </SelectTrigger>
        <SelectContent>
          {ITEMS.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </>
    ),
  },
};
