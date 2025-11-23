import { useState, useCallback } from "react";
import type { UseToggleReturn } from "../types";

function useToggle(initialValue: boolean = false): UseToggleReturn {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const setValueDirect = useCallback(
    (newValue: boolean) => setValue(newValue),
    []
  );
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
    setValue: setValueDirect,
    reset,
  };
}

export default useToggle;
