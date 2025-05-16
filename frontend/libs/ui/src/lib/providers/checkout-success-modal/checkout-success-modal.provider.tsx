'use client';

import {
  CheckoutSuccess,
  Dialog,
  DialogClose,
  DialogContent,
} from '@pw-fe-monorepo/ui';
import { createContext, useState } from 'react';

type HandleOpenProps = { isOpen: boolean; content?: React.ReactNode };

export const CheckoutSuccessModalContext = createContext<{
  isOpen: boolean;
  modalContent: React.ReactNode | null;
  setIsOpen: (props: HandleOpenProps) => void;
}>(null as any);

export const CheckoutSuccessModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen({ isOpen, content }: HandleOpenProps) {
    setIsOpen(isOpen);
    setModalContent(content);
  }

  const value = {
    isOpen,
    modalContent,
    setIsOpen: handleIsOpen,
  };

  return (
    <CheckoutSuccessModalContext.Provider value={value}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[524px] p-11 pt-[104px]">
          <CheckoutSuccess>{modalContent}</CheckoutSuccess>
          <DialogClose />
        </DialogContent>
      </Dialog>
    </CheckoutSuccessModalContext.Provider>
  );
};
