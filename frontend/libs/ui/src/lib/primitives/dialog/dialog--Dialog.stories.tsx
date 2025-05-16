import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './dialog';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'Primitives/Dialog',
  args: {},
};
export default meta;

export const DialogModal: StoryObj<typeof Dialog> = {
  name: 'All variants',
  render: (args) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button" variant="primary">
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          Random content
          <DialogClose />
        </DialogContent>
      </Dialog>
    );
  },
};
