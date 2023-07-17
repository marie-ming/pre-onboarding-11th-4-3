import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/SearchIcon.svg';
import { ReactComponent as CloseIcon } from '../assets/CloseIcon.svg';

const SearchInput = () => {
  const [onSearch, setOnSearch] = useState(false);

  return (
    <ContainerStyle onSearch={onSearch}>
      <InputDivStyle>
        {onSearch ? (
          <InputOnStyle>
            <input id="search_bar_main" type="search" />
            <span onClick={() => setOnSearch(prev => !prev)}>
              <CloseIcon />
            </span>
          </InputOnStyle>
        ) : (
          <InputTextStyle onClick={() => setOnSearch(prev => !prev)}>
            <SearchIcon />
            <span>질환명을 입력해 주세요.</span>
          </InputTextStyle>
        )}
      </InputDivStyle>
      <ButtonStyle>
        <SearchIcon />
      </ButtonStyle>
    </ContainerStyle>
  );
};

export default SearchInput;

const ContainerStyle = styled.div<{ onSearch: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  max-width: 490px;
  padding-right: 8px;

  border-radius: 42px;
  border: 2px solid;
  border-color: ${props => (props.onSearch ? 'rgb(0, 123, 233)' : '#FFFFFF')};
  background-color: #ffffff;

  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;

const InputDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  flex: 1;
  padding: 20px 10px 20px 24px;
`;

const InputTextStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  color: #a7afb7;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 12px;
  }
`;
const InputOnStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  input {
    padding-right: 10px;
    font-size: 1.25rem;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    border-radius: 50%;
    color: rgb(255, 255, 255);
    background-color: rgb(167, 175, 183);
  }
`;

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  background-color: #007be9;
  color: #ffffff;

  border: 0;
  border-radius: 100%;

  svg {
    width: 21px;
    height: 21px;
  }
`;
