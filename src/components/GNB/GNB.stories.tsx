import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import GNB from '.';

const meta: Meta<typeof Text> = {
  title: 'Components/GNB',
  component: GNB,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {},
};
