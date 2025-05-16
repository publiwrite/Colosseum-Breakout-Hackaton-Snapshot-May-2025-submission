'use client';
import { Fireworks as FW, FireworksHandlers } from '@fireworks-js/react';
import { useEffect, useRef } from 'react';

export const Fireworks = () => {
  const ref = useRef<FireworksHandlers>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.stop();
    }, 8000);
  }, []);

  return (
    <FW
      ref={ref}
      className="absolute z-40"
      options={{ opacity: 0.5, particles: 10 }}
    />
  );
};
