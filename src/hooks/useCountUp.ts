"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 2000, trigger = false): number {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    startTimeRef.current = null;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = now;
      }
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      setCount(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, duration, trigger]);

  return count;
}
