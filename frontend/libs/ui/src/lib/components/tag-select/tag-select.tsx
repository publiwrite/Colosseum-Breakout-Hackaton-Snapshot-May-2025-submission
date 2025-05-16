'use client';

import { Command } from 'cmdk';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import {
  ErrorMessage,
  InputProps,
  inputVariants,
} from '../../primitives/forms';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from '../../primitives/popover';
import { TagItem } from './tag-item';

type TagSelectItem = { id: string; name: string };

type TagSelectProps = Omit<InputProps, 'onChange' | 'value'> & {
  value: string[];
  onChange: (value: string[]) => void;
  items: TagSelectItem[];
};

const maxSelections = 5;
const itemSelectionSchema = z
  .array(z.string())
  .max(maxSelections, `You can only select up to ${maxSelections} tags.`);

export const TagSelect = forwardRef<HTMLInputElement, TagSelectProps>(
  (
    { className, onChange, items, value, placeholder, disabled, ...rest },
    ref,
  ) => {
    const innerInputRef = useRef<HTMLInputElement>(null);

    const [innerInputValue, setInnerInputValue] = useState('');
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>(value || []);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      if (selected.length < 5) setError(null);
    }, [selected]);

    const handleOnKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (!open) {
          e.preventDefault();
        }
      }

      if (e.key === 'Backspace') {
        if (innerInputValue === '') {
          setSelected((prev) => prev.slice(0, -1));
          onChange?.(selected.slice(0, -1));
        }
      }

      if (e.key === 'Escape') {
        if (open) {
          e.stopPropagation();
        }

        setOpen(false);
      }
    };

    const handleSelectItem = (itemId: string) => {
      const newSelected = [...selected, itemId];
      const result = itemSelectionSchema.safeParse(newSelected);

      if (result.success) {
        setError(null);
        setSelected(newSelected);
        onChange?.(newSelected);
        setInnerInputValue('');
        setOpen(false);
        innerInputRef.current?.blur();
      } else {
        setError(result.error.errors[0].message);
      }
    };

    return (
      <>
        <Popover open={open} onOpenChange={setOpen}>
          <Command loop onKeyDown={(e) => handleOnKeyDown(e)}>
            <PopoverAnchor className={twMerge(open && 'pointer-events-none')}>
              <div
                className={twMerge(
                  inputVariants(),
                  'flex flex-wrap items-center gap-2 cursor-text py-1.5',
                  disabled && 'cursor-not-allowed opacity-50',
                  selected.length && '!h-auto',
                )}
                onClick={() => innerInputRef.current?.focus()}
                {...rest}
              >
                {selected.map((itemId) => (
                  <TagItem
                    key={itemId}
                    text={
                      items.find((item) => item.id === itemId)?.name ||
                      'Unknown'
                    }
                    onDelete={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelected((prev) => prev.filter((id) => id !== itemId));
                      onChange?.(selected.filter((id) => id !== itemId));
                    }}
                  />
                ))}

                <Command.Input
                  ref={innerInputRef}
                  className={twMerge(
                    'flex-1 h-full outline-none bg-transparent',
                    'placeholder:text-gray-600 dark:placeholder:text-gray-dark-300',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                  )}
                  disabled={disabled}
                  value={innerInputValue}
                  placeholder={selected.length ? undefined : placeholder}
                  onValueChange={(val) => {
                    setInnerInputValue(val);
                  }}
                  onBlur={() => setOpen(false)}
                  onFocus={() => {
                    setTimeout(() => {
                      setOpen(true);
                    }, 100);
                  }}
                />
              </div>
            </PopoverAnchor>
            <PopoverContent
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              onOpenAutoFocus={(e) => e.preventDefault()}
              className={twMerge(
                'mt-2 p-4',
                'max-h-[var(--radix-popper-available-height)] md:h-[min(var(--radix-popper-available-height),400px)] overflow-auto',
                'w-[var(--radix-popper-anchor-width)] md:w-[max(var(--radix-popper-anchor-width),400px)] rounded-lg',
                'bg-white dark:bg-gray-dark-700',
                'border border-gray-300 dark:border-gray-dark-600',
              )}
            >
              <Command.List className="h-full">
                <Command.Empty className="px-3 py-2">
                  No results found.
                </Command.Empty>
                {items
                  .filter((item) => !selected.includes(item.id))
                  .map((item) => (
                    <Command.Item
                      key={item.id}
                      value={item.id}
                      keywords={[item.name]}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onSelect={() => handleSelectItem(item.id)}
                      className={twMerge(
                        'text-gray-600 dark:text-gray-400',
                        'px-3 py-2 rounded-lg cursor-pointer',
                        'data-[selected=true]:bg-gray-200  dark:data-[selected=true]:bg-gray-dark-600',
                        'data-[selected=true]:text-gray-900 dark:data-[selected=true]:text-white',
                      )}
                    >
                      {item.name}
                    </Command.Item>
                  ))}
              </Command.List>
            </PopoverContent>
          </Command>
        </Popover>
        {error && <ErrorMessage message={error} />}
      </>
    );
  },
);
