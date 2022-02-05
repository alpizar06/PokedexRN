import {useEffect, useState} from 'react';

export const useDebounceValue = (input: string = '', _time: number = 500) => {
  const [debouncedValue, setdebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setdebouncedValue(input);
    }, _time);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return debouncedValue;
};
