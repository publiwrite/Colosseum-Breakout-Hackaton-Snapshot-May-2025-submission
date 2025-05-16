'use client';

import { createContext, useCallback, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
} from '../../primitives/alert-dialog';

type ConfirmationDialogPayload = {
  heading: string;
  description: string;
  onSuccess: () => void;
  onCancel?: () => void;
};

export const ConfirmationDialogContext = createContext<{
  show: (payload: ConfirmationDialogPayload) => void;
}>(null as any);

export const ConfirmationDialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [payload, setPayload] = useState<ConfirmationDialogPayload>();

  const { heading, description, onSuccess, onCancel } = payload || {};

  const show = useCallback((payload: ConfirmationDialogPayload) => {
    setPayload(payload);
    setTimeout(() => setOpen(true), 50);
  }, []);

  const value = {
    show,
  };

  return (
    <ConfirmationDialogContext.Provider value={value}>
      {children}

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent onEscapeKeyDown={() => onCancel && onCancel()}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold text-black dark:text-white">
                {heading}
              </p>
              <p className="text-gray-700 dark:text-gray-dark-300">
                {description}
              </p>
            </div>

            <div className="flex items-center justify-end gap-5">
              <AlertDialogCancel onClick={() => onCancel && onCancel()}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => onSuccess && onSuccess()}>
                Yes
              </AlertDialogAction>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </ConfirmationDialogContext.Provider>
  );
};
