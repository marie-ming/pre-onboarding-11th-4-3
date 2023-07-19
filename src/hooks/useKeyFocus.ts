import React, { useCallback, useState, useEffect } from 'react';
import { GetSickList } from '../interface/sick';

interface PropsType {
  value: string;
  data: GetSickList[] | undefined;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const useKeyFocus = ({ value, data = [], setInputValue }: PropsType) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const length = data.length;

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.nativeEvent.isComposing) return;

      if (event.code === 'ArrowDown') {
        event.preventDefault();

        if (focusedIndex === length - 1) return setFocusedIndex(0);
        setFocusedIndex(prev => (prev === null ? 0 : prev + 1));
      }

      if (event.code === 'ArrowUp') {
        event.preventDefault();

        if (focusedIndex === 0) return setFocusedIndex(length - 1);

        setFocusedIndex(prev => (prev ? prev - 1 : length - 1));
      }

      if (event.key === 'Enter') {
        if (!data || focusedIndex === null) return;
        setInputValue(data[focusedIndex].sickNm);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focusedIndex, length]
  );

  const resetFocusedIndex = useCallback(() => setFocusedIndex(null), []);

  useEffect(() => {
    resetFocusedIndex();
  }, [resetFocusedIndex, value]);

  return { focusedIndex, onKeyDown };
};

export default useKeyFocus;
