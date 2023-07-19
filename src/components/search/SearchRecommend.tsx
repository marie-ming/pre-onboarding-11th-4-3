import { styled } from 'styled-components';
import SearchItem from './SearchItem';
import { GetSickList } from '../../interface/sick';

interface PropsType {
  inputValue: string;
  data: GetSickList[] | undefined;
  isLoading: boolean;
  focusedIndex: number | null;
}

const SearchRecommend = ({
  inputValue,
  data,
  isLoading,
  focusedIndex,
}: PropsType) => {
  return (
    <>
      <SearchItem text={inputValue} bold={600} />
      <TitleStyle>추천 검색어</TitleStyle>
      {isLoading ? (
        <TextStyle>Loading...</TextStyle>
      ) : data?.length ? (
        data?.map((item, idx) => (
          <SearchItem
            key={idx}
            text={item.sickNm}
            isFocused={focusedIndex === idx}
          />
        ))
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
