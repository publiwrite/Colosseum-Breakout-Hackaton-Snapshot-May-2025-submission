import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, UnderlinedTabsTrigger } from './tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Primitives/Tabs',
  args: {},
};
export default meta;

export const Regular: StoryObj<typeof Tabs> = {
  name: 'Regular',
  args: {},
  render: (args) => {
    return (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <UnderlinedTabsTrigger value="account">Account</UnderlinedTabsTrigger>
          <UnderlinedTabsTrigger value="password">
            Password
          </UnderlinedTabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    );
  },
};
