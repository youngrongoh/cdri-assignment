import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';
import Search from '@/assets/icons/search.svg';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'placeholder',
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    placeholder: 'placeholder',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'default',
    placeholder: 'placeholder',
    prefix: <Search />,
  },
};
