'use client';

import { useEffect, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView<T extends Element = Element>(
  options: UseInViewOptions = {},
) {
  const { threshold = 1, rootMargin = '0px', root, once = false } = options;

  const [ref, setRef] = useState<T | null>(null);

  const [inView, setInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only create observer when the element is available
    if (!ref || (once && hasTriggered)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        setInView(isElementInView);

        if (isElementInView && once) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin },
    );

    // Use the current value directly inside the effect
    const element = ref;
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, once, hasTriggered, ref]);

  return { ref: setRef, inView };
}
