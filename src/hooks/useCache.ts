import { useState } from 'react';
import { EXPIRE_TIME } from '../constants/cache';

interface CacheType<T> {
  key: string;
  value: T;
  expireTime: number;
}

const useCache = <T>() => {
  const [cache, setCache] = useState<CacheType<T>[]>([]);

  const set = (key: string, value: T) => {
    setCache([
      ...cache.filter(item => item.key !== key),
      {
        key: key,
        value: value,
        expireTime: Date.now() + EXPIRE_TIME,
      },
    ]);
  };

  const get = (key: string) => {
    return cache.find(item => {
      return item.key === key && item.expireTime > Date.now();
    });
  };

  return { set, get };
};

export default useCache;
