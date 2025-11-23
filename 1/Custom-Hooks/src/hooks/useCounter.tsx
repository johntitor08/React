import { useState, useCallback } from "react";
import type { UseCounterReturn } from "../types";

function useCounter(
  initialValue: number = 0,
  options: { min?: number; max?: number; step?: number } = {}
): UseCounterReturn {
  const { step = 1, min = -Infinity, max = Infinity } = options;

  const [count, setCount] = useState<number>(() => {
    return Math.max(min, Math.min(max, initialValue));
  });

  const increment = useCallback(() => {
    setCount((prev) => {
      const newValue = prev + step;
      return newValue > max ? max : newValue;
    });
  }, [step, max]);

  const decrement = useCallback(() => {
    setCount((prev) => {
      const newValue = prev - step;
      return newValue < min ? min : newValue;
    });
  }, [step, min]);

  const reset = useCallback(() => {
    setCount(Math.max(min, Math.min(max, initialValue)));
  }, [initialValue, min, max]);

  const setCountDirect = useCallback(
    (value: number) => {
      setCount(Math.max(min, Math.min(max, value)));
    },
    [min, max]
  );

  const setToMax = useCallback(() => setCount(max), [max]);
  const setToMin = useCallback(() => setCount(min), [min]);

  const isAtMax = count >= max;
  const isAtMin = count <= min;

  return {
    count,
    increment,
    decrement,
    reset,
    setCount: setCountDirect,
    setToMax,
    setToMin,
    isAtMax,
    isAtMin,
  };
}

export default useCounter;
