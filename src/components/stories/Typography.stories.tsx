import type { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';

const Text = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => <div className={className}>{children}</div>;

const meta: Meta<typeof Text> = {
  title: 'DesignSystem/Typography',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: {
        type: 'select',
      },
      options: [
        'text-title1',
        'text-title2',
        'text-title3',
        'text-body1',
        'text-body2',
        'text-body2 font-bold',
        'text-caption',
        'text-small',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Title1: Story = {
  args: {
    className: 'text-title1',
    children: 'Title1',
  },
};

export const title2: Story = {
  args: {
    className: 'text-title2',
    children: 'Title2',
  },
};

export const title3: Story = {
  args: {
    className: 'text-title3',
    children: 'Title3',
  },
};

export const body1: Story = {
  args: {
    className: 'text-body1',
    children: 'Body1',
  },
};

export const body2: Story = {
  args: {
    className: 'text-body2',
    children: 'Body2',
  },
};

export const body2Bold: Story = {
  args: {
    className: 'text-body2 font-bold',
    children: 'Body2 Bold',
  },
};

export const caption: Story = {
  args: {
    className: 'text-caption',
    children: 'Caption',
  },
};

export const small: Story = {
  args: {
    className: 'text-small',
    children: 'Small',
  },
};
