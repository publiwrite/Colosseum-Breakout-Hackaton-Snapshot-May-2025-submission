import React from 'react';
import { twMerge } from 'tailwind-merge';

export const GLOW_COLORS = {
  green: 'bg-gradient-to-t from-green-200 to-transparent dark:from-green-300',
  purple:
    'bg-gradient-to-t from-purple-200 to-transparent dark:from-purple-300',
  blue: 'bg-gradient-to-t from-blue-200 to-transparent dark:from-blue-300',
  red: 'bg-gradient-to-t from-red-200 to-transparent dark:from-red-300',
  orange:
    'bg-gradient-to-t from-orange-200 to-transparent dark:from-orange-300',
};

export const SectionHeader = ({
  children,
  className,
  glow,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: keyof typeof GLOW_COLORS;
}) => {
  const text = React.Children.toArray(children).join(' ');
  const words = text.split(' ');

  return (
    <h2
      className={twMerge(
        'text-2xl lg:text-4xl font-medium relative z-[2]',
        'overflow-hidden',
        className,
      )}
    >
      {glow
        ? words.map((word, index) => (
            <span className={twMerge('inline-block relative z-[1]')}>
              <span
                className={twMerge(
                  'absolute inset-0 transform-gpu skew-x-[-50deg] z-[-1] opacity-60',
                  glow && GLOW_COLORS[glow],
                )}
              ></span>
              <span className="relative z-[2]">{word}</span>
              {index !== words.length - 1 && <span>&nbsp;</span>}
            </span>
          ))
        : children}
    </h2>
  );
};
