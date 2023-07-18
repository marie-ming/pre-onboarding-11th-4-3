import React, { useState } from 'react';
import styled from 'styled-components';
import SearchRecommend from './SearchRecommend';
import SearchRecent from './SearchRecent';
import useSickList from '../../hooks/useSickList';
import useKeyFocus from '../../hooks/useKeyFocus';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';
import { ReactComponent as CloseIcon } from '../../assets/CloseIcon.svg';

const SearchInput = () => {
  const [visible, setVisible] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const { data, isLoading } = useSickList(inputValue);

  const inputClose = () => {
    setVisible(prev => !prev);
    setInputValue('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const { focusedIndex, onKeyDown } = useKeyFocus({
    value: inputValue,
    length: data?.length,
  });

  return (
    <ContainerStyle $onSearch={visible}>
      <form onSubmit={handleSubmit}>
        <InputDivStyle>
          {visible ? (
            <InputOnStyle>
              <input
                type="search"
                value={inputValue}
                onInput={e => setInputValue(e.currentTarget.value)}
                spellCheck={false}
                onKeyDown={onKeyDown}
                autoFocus
              />
              <span onClick={inputClose}>
                <CloseIcon />
              </span>
            </InputOnStyle>
          ) : (
            <InputTextStyle onClick={() => setVisible(prev => !prev)}>
              <SearchIcon />
              <span>질환명을 입력해 주세요.</span>
            </InputTextStyle>
          )}
        </InputDivStyle>
        <ButtonStyle>
          <SearchIcon />
        </ButtonStyle>
      </form>
      {visible && (
        <WordBoxStyle>
          {inputValue ? (
            <SearchRecommend
              inputValue={inputValue}
              data={data}
              isLoading={isLoading}
              focusedIndex={focusedIndex}
            />
          ) : (
            <SearchRecent />
          )}
        </WordBoxStyle>
      )}
    </ContainerStyle>
  );
};

export default SearchInput;

const ContainerStyle = styled.div<{ $onSearch: boolean }>`
  width: 100%;
  max-width: 490px;
  padding-right: 8px;

  border-radius: 42px;
  border: 2px solid;
  border-color: ${props => (props.$onSearch ? 'rgb(0, 123, 233)' : '#FFFFFF')};
  background-color: #ffffff;

  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;

  position: relative;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
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

const WordBoxStyle = styled.div`
  z-index: 1;
  position: absolute;
  top: 100%;
  left: 0px;

  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 8px;
  padding-top: 24px;
  padding-bottom: 16px;

  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;

  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;
