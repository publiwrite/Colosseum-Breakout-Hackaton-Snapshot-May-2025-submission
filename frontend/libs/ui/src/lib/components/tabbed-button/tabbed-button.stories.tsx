import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  TabbedButton,
  TabbedButtonBase,
  TabbedButtonRoot,
} from './tabbed-button';

const meta: Meta<typeof TabbedButtonRoot> = {
  component: TabbedButtonRoot,
  title: 'Components/TabbedButton',
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof TabbedButtonRoot> = {
  render: () => {
    return (
      <TabbedButtonRoot defaultValue="tab1">
        <TabbedButtonBase>
          <TabbedButton value="tab1">Option 1</TabbedButton>
          <TabbedButton value="tab2">Option 2</TabbedButton>
        </TabbedButtonBase>
      </TabbedButtonRoot>
    );
  },
};

export const Controlled: StoryObj<typeof TabbedButtonRoot> = {
  render: () => {
    const [value, setValue] = useState('tab1');
    return (
      <div className="flex flex-col gap-4">
        <TabbedButtonRoot value={value} onValueChange={setValue}>
          <TabbedButtonBase>
            <TabbedButton value="tab1">Option 1</TabbedButton>
            <TabbedButton value="tab2">Option 2</TabbedButton>
            <TabbedButton value="tab3">Option 3</TabbedButton>
          </TabbedButtonBase>
        </TabbedButtonRoot>
        <div>
          <p>Current value: {value}</p>
          <button
            onClick={() => setValue('tab1')}
            className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
          >
            Set to Option 1
          </button>
          <button
            onClick={() => setValue('tab2')}
            className="px-3 py-1 mr-2 bg-gray-200 rounded-md"
          >
            Set to Option 2
          </button>
          <button
            onClick={() => setValue('tab3')}
            className="px-3 py-1 bg-gray-200 rounded-md"
          >
            Set to Option 3
          </button>
        </div>
      </div>
    );
  },
};
