import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import HeartFill from '@/assets/icons/heart-fill.svg';
import ChevronDown from '@/assets/icons/shevron-down.svg';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'sm', 'lg', 'block', 'icon'],
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    children: <HeartFill />,
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'sm',
    children: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: (
      <>
        상세보기
        <ChevronDown />
      </>
    ),
  },
};
