import React from "react";
import PostBackButton from "../components/post/PostBackButton/PostBackButton";
import PostContents from "../components/post/PostContents/PostContents";

const PostContainer = () => {
  return (
    <React.Fragment>
      <PostContents />
      <PostBackButton />
    </React.Fragment>
  );
};

export default PostContainer;
