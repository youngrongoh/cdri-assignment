import { cn } from '@/lib/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';

const Text = ({
  variant,
  color,
  children,
}: {
  variant: string;
  color: string;
  children: ReactNode;
}) => <div className={cn(color, variant)}>{children}</div>;

const meta: Meta<typeof Text> = {
  title: 'DesignSystem/Typography',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'typo-title1',
        'typo-title2',
        'typo-title3',
        'typo-body1',
        'typo-body2',
        'typo-body2 font-bold',
        'typo-caption',
        'typo-small',
      ],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['text-primary', 'text-secondary', 'text-subtitle'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Title1: Story = {
  args: {
    variant: 'typo-title1',
    children: 'Title1',
  },
};

export const title2: Story = {
  args: {
    variant: 'typo-title2',
    children: 'Title2',
  },
};

export const title3: Story = {
  args: {
    variant: 'typo-title3',
    children: 'Title3',
  },
};

export const body1: Story = {
  args: {
    variant: 'typo-body1',
    children: 'Body1',
  },
};

export const body2: Story = {
  args: {
    variant: 'typo-body2',
    children: 'Body2',
  },
};

export const body2Bold: Story = {
  args: {
    variant: 'typo-body2 font-bold',
    children: 'Body2 Bold',
  },
};

export const caption: Story = {
  args: {
    variant: 'typo-caption',
    children: 'Caption',
  },
};

export const small: Story = {
  args: {
    variant: 'typo-small',
    children: 'Small',
  },
};
