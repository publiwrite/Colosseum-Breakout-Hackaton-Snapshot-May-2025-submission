import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
  tags: ['autodocs'],
  title: 'Primitives/Popover',
  args: {},
};
export default meta;

export const Regular: StoryObj<typeof Popover> = {
  name: 'All variants',
  render: (args) => {
    return (
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    );
  },
};
