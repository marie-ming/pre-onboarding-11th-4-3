import { styled } from 'styled-components';
import SearchInput from './SearchInput';

const SearchSection = () => {
  return (
    <ContainerStyle>
      <BoxStyle>
        <h2>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h2>
        <SearchInput />
      </BoxStyle>
    </ContainerStyle>
  );
};

export default SearchSection;

const ContainerStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: #cae9ff;
`;

const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1040px;

  padding: 80px 0 160px;

  h2 {
    font-size: 2.125rem;
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.6;
    margin-bottom: 40px;
    text-align: center;
  }
`;
