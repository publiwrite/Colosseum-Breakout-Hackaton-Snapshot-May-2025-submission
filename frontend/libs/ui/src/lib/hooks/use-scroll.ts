'use client';

import { useEffect, useState } from 'react';

type Scroll = {
  scrollX: number;
  scrollY: number;
  direction: 'up' | 'down' | undefined;
};

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<Scroll>({
    scrollX: 0,
    scrollY: 0,
    direction: undefined,
  });

  const handleScroll = () => {
    setScrollPosition((prevPosition) => {
      const currX = window.scrollX;
      const currY = window.scrollY;
      let direction: Scroll['direction'] = 'down';

      if (currY > prevPosition.scrollY) {
        direction = 'down';
      } else if (currY < prevPosition.scrollY) {
        direction = 'up';
      }
      // else if (currX > prevPosition.scrollX) {
      //   direction = 'right';
      // } else if (currX < prevPosition.scrollX) {
      //   direction = 'left';
      // }

      return {
        scrollX: currX,
        scrollY: currY,
        direction,
      };
    });
  };

  useEffect(() => {
    setScrollPosition({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      direction: undefined,
    });

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};
