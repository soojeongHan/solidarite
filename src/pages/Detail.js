import React from "react";
import qs from "query-string";
import Main from "../components/main";
import PostContainer from "../containers/PostContainer";

const Detail = ({ location, match }) => {
  const { id } = qs.parse(location.search);
  console.log(id);

  return (
    <Main>
      <PostContainer />
    </Main>
  );
};

export default Detail;
