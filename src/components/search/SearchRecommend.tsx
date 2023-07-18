import { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import SearchItem from './SearchItem';
import { getSickList } from '../../apis/sick';
import { GetSickList } from '../../types/sick';
import useDebounce from '../../hooks/useDebounce';

interface PropsType {
  inputValue: string;
}

const SearchRecommend = ({ inputValue }: PropsType) => {
  const [data, setData] = useState<GetSickList[]>();
  const [isLoading, setIsLoading] = useState(false);

  const debouncedText = useDebounce(inputValue);

  const getSick = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getSickList(debouncedText);
      setData(response);

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

  return (
    <>
      <SearchItem text={inputValue} />
      <TitleStyle>추천 검색어</TitleStyle>
      {isLoading ? (
        <TextStyle>Loading...</TextStyle>
      ) : data?.length ? (
        data
          ?.slice(0, 7)
          .map((item, idx) => <SearchItem key={idx} text={item.sickNm} />)
      ) : (
        <TextStyle>추천 검색어가 없습니다.</TextStyle>
      )}
    </>
  );
};

export default SearchRecommend;

const TitleStyle = styled.span`
  color: rgb(106, 115, 123);
  font-size: 13px;

  padding: 0 24px;
`;

const TextStyle = styled.span`
  padding: 8px 24px;
`;
