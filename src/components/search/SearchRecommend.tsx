import { styled } from 'styled-components';
import KeywordLine from '.././common/KeywordLine';

interface PropsType {
  inputValue: string;
}

const SearchRecommend = ({ inputValue }: PropsType) => {
  return (
    <>
      <KeywordLine text={inputValue} />
      <TitleStyle>추천 검색어</TitleStyle>
      <KeywordLine text="검색어 없음" />
    </>
  );
};

export default SearchRecommend;

const TitleStyle = styled.span`
  color: rgb(106, 115, 123);
  font-size: 13px;

  padding: 0 24px;
`;
