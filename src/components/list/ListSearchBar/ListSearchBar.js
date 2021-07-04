import React from "react";
import styled from "@emotion/styled";

const SearchBarWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  appearance: none;
`;
const SearchBarInfo = styled.p`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: grey;
`;
const SearchBar = styled.figure`
  padding: 1rem;
  border: 1px solid lightgrey;
  border-radius: 3px;
  user-select: none; // disabled caret

  &:focus-within,
  &:hover {
    border: 1px solid blue;
  }
`;
const SearchBarIcon = styled.i`
  display: inline;
  margin-right: 0.5rem;
  & > svg {
    width: 1rem;
    height: 1rem;
  }
`;
const SearchBarInput = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
`;

const ListSearchBar = ({
  searchWord,
  onFocusSearchBar,
  inputRef,
  onChangeSearchWord,
}) => {
  return (
    <SearchBarWrapper>
      <SearchBarInfo>게시물을 검색해보세요</SearchBarInfo>
      <SearchBar onClick={() => onFocusSearchBar()}>
        <SearchBarIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
        </SearchBarIcon>
        <SearchBarInput
          placeholder="검색어를 입력하세요"
          ref={inputRef}
          defaultValue={searchWord}
          onChange={(e) => onChangeSearchWord(e)}
        />
      </SearchBar>
    </SearchBarWrapper>
  );
};

export default ListSearchBar;
