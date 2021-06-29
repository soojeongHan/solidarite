import React from "react";
import Main from "../components/main";
import HeaderContainer from "../containers/HeaderContainer";
import ListContainer from "../containers/ListContainer";

const Home = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <Main>
        <ListContainer />
      </Main>
    </React.Fragment>
  );
};

export default Home;
