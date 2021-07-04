import React from "react";
import styled from "@emotion/styled";

const Navigation = styled.nav`
  margin-top: 1rem;
  border-bottom: 1px solid lightgrey;
`;
const Button = styled.button`
  border: none;
  color: ${(props) => (props.selected ? "blue" : "black")};
  background: none;
  cursor: pointer;
  padding: 1rem 0.75rem;
  font-weight: bolder;
  border-radius: 2px;
  transition-duration: 0.5s;
  &:hover {
    color: skyblue;
    background-color: #ece9e8;
  }
`;
const ListNavigation = ({
  currentCategory,
  categoryList,
  onClickChangeCategory,
}) => {
  return (
    <Navigation>
      {categoryList.map((elem, i) => (
        <Button
          key={i}
          onClick={() => onClickChangeCategory(elem.type)}
          selected={elem.type === currentCategory}
        >
          {elem.type.toUpperCase()} Posts
        </Button>
      ))}
    </Navigation>
  );
};

export default ListNavigation;
