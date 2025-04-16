import type { Meta, StoryObj } from '@storybook/react';
import SearchCount from '.';

const meta: Meta<typeof SearchCount> = {
  title: 'Components/SearchCount',
  component: SearchCount,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SearchCount>;

export const Default: Story = {
  args: {
    label: '검색 결과',
    count: 21,
  },
};
