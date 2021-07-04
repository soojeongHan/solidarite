import React from "react";
import styled from "@emotion/styled";

const Bar = styled.div`
  width: 100%;
  height: 1px;
`;

const ListFetchMoreBar = (_, ref) => {
  return <Bar ref={ref} />;
};

export default React.forwardRef(ListFetchMoreBar);
