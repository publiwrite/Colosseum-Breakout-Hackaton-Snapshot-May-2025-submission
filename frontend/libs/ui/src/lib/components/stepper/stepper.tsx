'use client';

import { createRef, Fragment } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { CSSTransition } from 'react-transition-group';
import { twMerge } from 'tailwind-merge';

export const Stepper = ({
  steps,
  currentStep,
  onStepChange,
}: {
  steps: { label: string }[];
  currentStep: number;
  onStepChange: (step: number) => void;
}) => {
  return (
    <div
      className={twMerge(
        'h-[66px] rounded-xl p-3',
        'border border-gray-300 dark:border-gray-dark-600',
        'flex items-center gap-5',
      )}
    >
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const nodeRef = createRef<HTMLDivElement>();

        return (
          <Fragment key={index}>
            <div className="flex items-center gap-4">
              <button
                type="button"
                disabled={stepNumber > 1 && currentStep !== 1}
                onClick={() => onStepChange(Math.max(currentStep - 1, 1))}
                className={twMerge(
                  'flex items-center justify-center shrink-0',
                  'w-10 h-10 rounded-full',
                  'transition-colors duration-200',
                  stepNumber === currentStep
                    ? 'bg-blue-500'
                    : 'border border-gray-300 dark:border-gray-dark-600',
                )}
              >
                <span
                  className={twMerge(
                    'font-medium transition-colors duration-200',
                    stepNumber === currentStep
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-dark-300',
                  )}
                >
                  {stepNumber === 1 && currentStep > stepNumber ? (
                    <HiOutlineArrowLeft className="w-6 h-6 stroke-black dark:stroke-white" />
                  ) : (
                    stepNumber.toString().padStart(2, '0')
                  )}
                </span>
              </button>

              <CSSTransition
                in={stepNumber === currentStep}
                timeout={400}
                nodeRef={nodeRef}
                unmountOnExit
                classNames={{
                  enter: 'opacity-0 max-w-0',
                  enterActive: '!opacity-100 !max-w-xl',
                  exit: 'opacity-100 max-w-xl',
                  exitActive: '!opacity-0 !max-w-0',
                }}
              >
                <div
                  ref={nodeRef}
                  className={twMerge(
                    'flex flex-col',
                    'transition-all ease-in-out duration-500',
                  )}
                >
                  <span className="text-xs text-gray-700 dark:text-gray-dark-300 line-clamp-1">
                    Step {stepNumber}
                  </span>
                  <span className="font-medium line-clamp-1">{step.label}</span>
                </div>
              </CSSTransition>
            </div>

            {stepNumber < steps.length && <hr className="border w-px h-full" />}
          </Fragment>
        );
      })}
    </div>
  );
};
