'use client';

import { BroadcastChannelPolyfill } from '@pw-fe-monorepo/configs';
import Cookies, { CookieAttributes } from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';

const broadcastChannelType = 'cookie-update';
const channel = new BroadcastChannelPolyfill(broadcastChannelType);

export function useCookie(name: string, defaultValue?: string) {
  const [value, setValue] = useState<string | undefined>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    if (!defaultValue) return undefined;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  useEffect(() => {
    // Listing window postmessage on all tabs to update their state
    const handleMessage = (event: MessageEvent) => {
      if (
        event.source !== self &&
        event.data.type === broadcastChannelType &&
        event.data.name === name
      ) {
        setValue(event.data.newValue);
      }
    };
    channel.addEventListener('message', handleMessage);

    return () => {
      channel.removeEventListener('message', handleMessage);
    };
  }, []);

  const updateCookie = useCallback(
    (newValue: string, options: CookieAttributes) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);

      // Send window message to other tabs to update their state via broadcast channel
      channel.postMessage({ type: broadcastChannelType, name, newValue });
    },
    [name],
  );

  const deleteCookie = useCallback(
    (options: CookieAttributes) => {
      Cookies.remove(name, options);
      setValue(undefined);

      // Send window message to other tabs to update their state via broadcast channel
      channel.postMessage({
        type: broadcastChannelType,
        name,
        newValue: undefined,
      });
    },
    [name],
  );

  return { value, updateCookie, deleteCookie };
}
