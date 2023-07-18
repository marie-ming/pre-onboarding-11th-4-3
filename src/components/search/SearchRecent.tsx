import { styled } from 'styled-components';
import KeywordLine from './SearchItem';

const SearchRecommend = () => {
  return (
    <>
      <TitleStyle>최근 검색어</TitleStyle>
      <DefaultTextStyle>최근 검색어가 없습니다</DefaultTextStyle>
      <KeywordLine text={'B형간염'} />
      <HrStyle />
      <TitleStyle>추천 검색어로 검색해보세요</TitleStyle>
      <RecommendDivStyle>
        {recommendWord.map((item: string, idx: number) => (
          <RecommendBtnStyle key={idx}>{item}</RecommendBtnStyle>
        ))}
      </RecommendDivStyle>
    </>
  );
};

export default SearchRecommend;

const recommendWord = ['B형간염', '비만', '관절염', '우울증', '식도염'];

const TitleStyle = styled.span`
  color: rgb(106, 115, 123);
  font-size: 13px;

  padding: 0 24px;
`;
const DefaultTextStyle = styled.span`
  color: rgb(167, 175, 183);

  margin-top: 16px;
  padding: 0 24px;
`;

const HrStyle = styled.div`
  background-color: rgb(237, 240, 242);
  height: 1px;
  margin: 24px 0;
`;

const RecommendDivStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;

  margin-top: 16px;
  margin-bottom: 8px;
  padding: 0 24px;
`;

const RecommendBtnStyle = styled.button`
  font-size: 0.875rem;

  max-width: 100%;
  background-color: rgb(238, 248, 255);
  color: rgb(0, 123, 233);
  border-radius: 20px;

  padding: 8px 16px;

  overflow: hidden;
  text-overflow: ellipsis;
`;
