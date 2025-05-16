import type { Meta } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Primitives/Button',
  args: {
    variant: `primary`,
    size: 'regular',
    disabled: false,
  },
  render: (args) => {
    const children = args.asChild ? (
      <a href="linkto">Custom html element</a>
    ) : (
      'Default button with all options'
    );

    return <Button {...args}>{children}</Button>;
  },
};
export default meta;

export const Primary = {
  name: 'With all options',
};
