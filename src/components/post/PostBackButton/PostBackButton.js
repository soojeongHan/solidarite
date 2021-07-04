import React from "react";
import styled from "@emotion/styled";

const BackButton = styled.button`
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: 5px;
  background: #3649f7;
  color: #fff;
  cursor: pointer;
  transition-duration: 0.25s;
  &:hover {
    background: #5c6bf3;
  }
`;

const PostBackButton = ({ onClickBackPage }) => {
  return <BackButton onClick={() => onClickBackPage()}>뒤로가기</BackButton>;
};

export default PostBackButton;
