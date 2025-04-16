import type { Meta, StoryObj } from '@storybook/react';
import SearchForm from '.';
import { MemoryRouter } from 'react-router';

const meta: Meta<typeof SearchForm> = {
  title: 'Components/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
  args: {},
};
