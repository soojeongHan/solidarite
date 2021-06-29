import React from "react";
import ListTemplate from "../components/list/ListTemplate";
import ListNavigation from "../components/list/ListNavigation";
import ListContents from "../components/list/ListContents";

const ListContainer = () => {
  return (
    <ListTemplate>
      <ListNavigation />
      <ListContents />
    </ListTemplate>
  );
};

export default ListContainer;
