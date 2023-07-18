import React, { useCallback, useState, useEffect } from 'react';

interface PropsType {
  value: string;
  length: number | undefined;
}

const useKeyFocus = ({ value, length = 0 }: PropsType) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

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
    },
    [focusedIndex, length]
  );

  const resetFocusedIndex = useCallback(() => setFocusedIndex(null), []);

  useEffect(() => {
    resetFocusedIndex();
  }, [resetFocusedIndex, value]);

  return { focusedIndex, onKeyDown };
};

export default useKeyFocus;
