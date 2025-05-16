import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from '../error-message';
import { FormGroup } from '../form-group';
import { InputLabel } from '../label';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Primitives/Checkbox',
  args: {
    disabled: false,
  },
};
export default meta;

export const Regular: StoryObj<typeof Checkbox> = {
  render: (args) => {
    return (
      <FormGroup>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" aria-invalid={false} {...args} />
          <InputLabel htmlFor="terms">Accept terms and conditions</InputLabel>
        </div>
      </FormGroup>
    );
  },
};

export const WithError: StoryObj<typeof Checkbox> = {
  render: (args) => {
    return (
      <FormGroup>
        <div className="flex items-center gap-2">
          <Checkbox id="terms2" aria-invalid={true} {...args} />
          <InputLabel htmlFor="terms2">Accept terms and conditions</InputLabel>
        </div>
        <ErrorMessage message="Some error message" />
      </FormGroup>
    );
  },
};
