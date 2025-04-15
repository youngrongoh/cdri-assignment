import type { Meta, StoryObj } from '@storybook/react';

const Chip = ({ color }: { color: string }) => (
  <div className={`w-[30px] h-[30px] ${color} border-1 border-black`} />
);

const meta: Meta<typeof Chip> = {
  title: 'DesignSystem/Colors',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: [
        'bg-primary',
        'bg-red',
        'bg-gray',
        'bg-lightgray',
        'bg-white',
        'bg-black',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    color: 'bg-primary',
  },
};
