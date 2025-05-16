'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const FullScreenContext = createContext<{
  isFullScreen: boolean;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
}>(null as any);

export const FullScreenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const contextValue = {
    isFullScreen,
    setIsFullScreen,
  };

  return (
    <FullScreenContext.Provider value={contextValue}>
      {children}
    </FullScreenContext.Provider>
  );
};
