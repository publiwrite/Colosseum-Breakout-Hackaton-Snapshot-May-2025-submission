'use client';

import { DismissableLayerProps } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { useScreenSize } from '../../hooks';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '../../primitives/dialog';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from '../../primitives/sheet';

export const PwModal = ({
  children,
  trigger,
  open,
  dialogContentClassName,
  sheetContentClassName,
  noCloseButton,
  onOpenChange,
  onInteractOutside,
  onEscapeKeyDown,
}: {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  open: boolean;
  dialogContentClassName?: string;
  sheetContentClassName?: string;
  noCloseButton?: boolean;
  onOpenChange: (open: boolean) => void;
  onInteractOutside?: DismissableLayerProps['onInteractOutside'];
  onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
}) => {
  const isLgOrAbove = useScreenSize('lg');

  if (isLgOrAbove) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent
          className={twMerge('max-w-2xl', dialogContentClassName)}
          onInteractOutside={onInteractOutside}
          onEscapeKeyDown={onEscapeKeyDown}
        >
          {children}

          {!noCloseButton && <DialogClose />}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}

      <SheetPortal>
        <SheetOverlay />
        <SheetContent
          side="bottom"
          className={sheetContentClassName}
          onInteractOutside={onInteractOutside}
          onEscapeKeyDown={onEscapeKeyDown}
        >
          {children}

          {!noCloseButton && <SheetClose />}
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};
