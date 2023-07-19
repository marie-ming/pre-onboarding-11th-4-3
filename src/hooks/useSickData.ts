import { useCallback, useEffect, useState } from 'react';
import { getSickList } from '../apis/sick';
import { GetSickList } from '../interface/sick';
import useDebounce from './useDebounce';
import useCache from './useCache';

const useSickList = (value: string) => {
  const [data, setData] = useState<GetSickList[]>();
  const [isLoading, setIsLoading] = useState(false);

  const debouncedText = useDebounce(value);
  const cache = useCache<GetSickList[]>();

  const getSick = useCallback(async () => {
    if (!debouncedText) return;

    const cachedData = cache.get(debouncedText);
    if (cachedData) {
      setData(cachedData.value);
      return;
    }

    try {
      setIsLoading(true);
      const response = await getSickList(debouncedText);
      const sliceRes = response.slice(0, 7);

      setData(sliceRes);
      cache.set(debouncedText, sliceRes);

      console.info('calling api');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedText]);

  useEffect(() => {
    getSick();
  }, [getSick]);

  return { data, isLoading };
};

export default useSickList;
