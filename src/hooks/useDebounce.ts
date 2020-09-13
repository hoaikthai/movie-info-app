import { useEffect, useState } from 'react';

const useDebounce = (value: string, time: number) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, value, time]);

  return debouncedValue;
};

export default useDebounce;
