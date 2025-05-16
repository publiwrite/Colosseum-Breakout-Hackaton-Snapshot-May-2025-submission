import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from '../error-message';
import { FormGroup } from '../form-group';
import { InputLabel } from '../label';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  title: 'Primitives/Input',
  args: {
    variant: `box`,
    disabled: false,
  },
};
export default meta;

export const Regular: StoryObj<typeof Input> = {
  render: (args) => {
    return (
      <FormGroup>
        <InputLabel htmlFor="lastName">Last name</InputLabel>
        <Input
          id="lastName"
          type="text"
          aria-invalid={false}
          placeholder="Doe"
          {...args}
        />
      </FormGroup>
    );
  },
};

export const WithError: StoryObj<typeof Input> = {
  render: (args) => {
    return (
      <FormGroup>
        <InputLabel htmlFor="lastName">Last name</InputLabel>
        <Input
          id="lastName"
          type="text"
          aria-invalid={true}
          placeholder="Doe"
          {...args}
        />
        <ErrorMessage message="Some error message" />
      </FormGroup>
    );
  },
};
