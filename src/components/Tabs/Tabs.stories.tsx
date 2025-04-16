import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger } from '.';

const TABS = ['search', 'cart'];

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
    value: {
      control: 'radio',
      options: TABS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Underline: Story = {
  args: {
    variant: 'underline',
    value: 'search',
    children: (
      <TabsList>
        {TABS.map((tab) => (
          <TabsTrigger key={tab} value={tab}>
            {tab.at(0)?.toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
    ),
  },
};
