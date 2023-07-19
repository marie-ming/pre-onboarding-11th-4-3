import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';

interface PropsType {
  text: string;
  isFocused?: boolean;
  bold?: number;
}

const SearchItem = ({ text, isFocused = false, bold = 400 }: PropsType) => {
  return (
    <TextStyle $isFocused={isFocused} bold={bold}>
      <SearchIcon />
      {text}
    </TextStyle>
  );
};

export default SearchItem;

const TextStyle = styled.span<{ $isFocused: boolean; bold: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 8px 24px;

  cursor: pointer;
  word-break: break-all;

  background: ${props => (props.$isFocused ? 'rgb(248, 249, 250)' : '#FFFFFF')};
  font-weight: ${props => props.bold};

  &:hover {
    background: rgb(248, 249, 250);
  }

  svg {
    color: rgb(167, 175, 183);
    width: 16px;
    height: 16px;
    margin-right: 12px;
  }
`;
