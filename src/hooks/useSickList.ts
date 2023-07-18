import { useCallback, useEffect, useState } from 'react';
import { getSickList } from '../apis/sick';
import { GetSickList } from '../types/sick';
import useDebounce from './useDebounce';

const useSickList = (value: string) => {
  const [data, setData] = useState<GetSickList[]>();
  const [isLoading, setIsLoading] = useState(false);

  const debouncedText = useDebounce(value);

  const getSick = useCallback(async () => {
    if (!debouncedText) return;
    try {
      setIsLoading(true);
      const response = await getSickList(debouncedText);
      const sliceRes = response.slice(0, 7);
      setData(sliceRes);

      console.info('calling api');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedText]);

  useEffect(() => {
    getSick();
  }, [getSick]);

  return { data, isLoading };
};

export default useSickList;
