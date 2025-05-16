'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ExploreButtonContext,
  HeaderMenuContext,
  PwLink,
} from '@pw-fe-monorepo/ui';

import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

export const ExploreButtonMobile = () => {
  const { menuItems } = useContext(ExploreButtonContext);
  const { setIsTopMenuOpen } = useContext(HeaderMenuContext);

  return (
    <div className="flex items-start flex-col gap-4">
      <p className="text-lg font-bold">Explore</p>

      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-5"
      >
        {Object.entries(menuItems).map(([key, value]) => (
          <AccordionItem
            key={key}
            value={`item-${key}`}
            className="flex flex-col gap-5"
          >
            <AccordionTrigger className={twMerge('w-full text-sm')}>
              <span>{value.label}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-5 flex flex-col items-start gap-5">
                {value.loading && (
                  <div className="skeleton-loader rounded-lg">LOADING....</div>
                )}

                {value.errorMessage && (
                  <div className="text-sm text-gray-500 dark:text-gray-dark-300">
                    Something went wrong. Please try again later.
                  </div>
                )}

                {!value.data?.length && !value.loading && (
                  <div className="text-sm text-gray-500 dark:text-gray-dark-300">
                    Stay tuned!
                  </div>
                )}

                {value.data?.map((child, jIndex) => (
                  <PwLink
                    key={`${key}--${jIndex}`}
                    href={child.href}
                    className="text-left text-sm"
                    onClick={() => setIsTopMenuOpen(false)}
                  >
                    {child.label}
                  </PwLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
