'use client';

import { useCallback, useEffect, useRef } from 'react';
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

interface MaskedElement {
  element: HTMLInputElement;
  options: Inputmask.Options;
  instance: any; // Inputmask instance
}

export function useHookFormMask<T extends FieldValues>(
  registerFn: UseFormRegister<T>,
) {
  // Keep track of masked elements with their configurations
  const maskedElements = useRef<Map<HTMLInputElement, MaskedElement>>(
    new Map(),
  );

  // Cleanup function to remove masks when elements are unmounted
  useEffect(() => {
    return () => {
      maskedElements.current.forEach(({ instance }) => {
        if (instance && typeof instance.remove === 'function') {
          instance.remove();
        }
      });
      maskedElements.current.clear();
    };
  }, []);

  const registerWithMask = useCallback(
    (
      fieldName: Path<T>,
      maskOptions: Inputmask.Options = {},
      registerOptions?: RegisterOptions<T>,
    ) => {
      if (!registerFn) throw new Error('registerFn is required');

      const { ref: registerRef, ...restRegister } = registerFn(
        fieldName,
        registerOptions,
      );

      return {
        ...restRegister,
        ref: (e: HTMLInputElement) => {
          if (e) {
            import('inputmask').then(({ default: Inputmask }) => {
              const existingMask = maskedElements.current.get(e);

              // Check if mask options have changed
              const optionsChanged =
                existingMask &&
                JSON.stringify(existingMask.options) !==
                  JSON.stringify(maskOptions);

              if (optionsChanged) {
                // Remove existing mask if options changed
                if (
                  existingMask.instance &&
                  typeof existingMask.instance.remove === 'function'
                ) {
                  existingMask.instance.remove();
                }
                maskedElements.current.delete(e);
              }

              // Apply new mask if element is not masked or options changed
              if (!existingMask || optionsChanged) {
                const im = new Inputmask(maskOptions);
                im.mask(e);
                maskedElements.current.set(e, {
                  element: e,
                  options: maskOptions,
                  instance: im,
                });
              }
            });
          }
          registerRef(e);
        },
      };
    },
    [registerFn],
  );

  return registerWithMask;
}
