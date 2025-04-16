import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from '.';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'placeholder',
    searchHistory: ['keyword 1', 'keyword 2'],
  },
};
