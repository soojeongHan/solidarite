import React from "react";
import styled from "@emotion/styled";

const MainElement = styled.main`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
`;

const Main = ({ children }) => {
  return <MainElement>{children}</MainElement>;
};

export default Main;
