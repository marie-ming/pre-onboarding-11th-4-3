import { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import SearchItem from './SearchItem';
import { getSickList } from '../../apis/sick';
import { GetSickList } from '../../types/sick';

interface PropsType {
  inputValue: string;
}

const SearchRecommend = ({ inputValue }: PropsType) => {
  const [data, setData] = useState<GetSickList[]>();

  const getSick = useCallback(async () => {
    try {
      const response = await getSickList(inputValue);
      setData(response);

      console.info('calling api');
    } catch (error) {
      console.error(error);
    }
  }, [inputValue]);

  useEffect(() => {
    getSick();
  }, [getSick]);

  return (
    <>
      <SearchItem text={inputValue} />
      <TitleStyle>
        {data?.length ? '추천 검색어' : '추천 검색어가 없습니다.'}
      </TitleStyle>

      {data?.slice(0, 7).map((item, idx) => (
        <SearchItem key={idx} text={item.sickNm} />
      ))}
    </>
  );
};

export default SearchRecommend;

const TitleStyle = styled.span`
  color: rgb(106, 115, 123);
  font-size: 13px;

  padding: 0 24px;
`;
