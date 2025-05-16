'use client';

import { useMounted, usePwTheme } from '../../hooks';
import { MoonIcon, SunIcon } from '../../icons';
import { SmallButton } from '../../primitives/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../primitives/tooltip';

export const ThemeButton = () => {
  const mounted = useMounted();
  const { theme, setTheme } = usePwTheme();

  if (!mounted) {
    return <div className="w-8 h-8 rounded-md skeleton-loader"></div>;
  }

  return (
    <TooltipProvider delayDuration={1500}>
      <Tooltip>
        <TooltipTrigger asChild>
          {theme === 'light' ? (
            <SmallButton
              className="max-lg:self-center max-lg:w-auto max-lg:gap-3"
              variant="secondary"
              onClick={() => setTheme('dark')}
            >
              <MoonIcon className="w-6 h-6 stroke-black dark:stroke-white" />
              <span className="lg:hidden">Dark mode</span>
            </SmallButton>
          ) : (
            <SmallButton
              className="max-lg:self-center max-lg:w-auto max-lg:gap-3"
              variant="secondary"
              onClick={() => setTheme('light')}
            >
              <SunIcon className="w-6 h-6 stroke-black dark:stroke-white" />
              <span className="lg:hidden">Light mode</span>
            </SmallButton>
          )}
        </TooltipTrigger>
        <TooltipContent className="hidden lg:flex">
          <p>Current theme: {theme}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
