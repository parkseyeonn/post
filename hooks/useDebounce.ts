import { useEffect, useState } from "react";

interface Props {
  value: object
  delay: number
}

export default function useDebounce({value, delay}: Props) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(value);
      setDebouncedValue(value)
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}