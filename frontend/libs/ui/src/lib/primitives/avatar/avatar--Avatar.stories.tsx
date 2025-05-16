import type { Meta, StoryObj } from '@storybook/react';
import { FaUser } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Primitives/Avatar',
};
export default meta;

export const Image: StoryObj<typeof Avatar> = {
  name: 'With image',
  args: {
    size: 'medium',
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
        <AvatarFallback>IS</AvatarFallback>
      </Avatar>
    );
  },
};

export const Initials: StoryObj<typeof Avatar> = {
  name: 'With initials',
  args: {
    size: 'medium',
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage />
        <AvatarFallback>IS</AvatarFallback>
      </Avatar>
    );
  },
};

export const NoImage: StoryObj<typeof Avatar> = {
  name: 'With no image',
  args: {
    size: 'medium',
  },
  render: (args) => {
    return (
      <Avatar {...args}>
        <AvatarImage />
        <AvatarFallback asChild>
          <span>
            <FaUser size={20} className="fill-gray-400" />
          </span>
        </AvatarFallback>
      </Avatar>
    );
  },
};
