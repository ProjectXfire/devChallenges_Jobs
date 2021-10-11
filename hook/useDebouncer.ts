import { useEffect, useState } from "react";

function useDebouncer<T>(value: T, wait = 0) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, wait);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return debouncedValue;
}

export default useDebouncer;
