'use client';

import React from 'react';

export const InputContext = React.createContext<{
  disabled: boolean;
  setDisabled: (value: boolean) => void;
}>({} as any);
