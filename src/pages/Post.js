import React from "react";
import qs from "query-string";
import Main from "../components/main";
import PostContainer from "../containers/PostContainer";

const Post = ({ location }) => {
  const postType = location.pathname.split("/")[1];
  const { id } = qs.parse(location.search);

  return (
    <Main>
      <PostContainer postId={id} postType={postType} />
    </Main>
  );
};

export default Post;
