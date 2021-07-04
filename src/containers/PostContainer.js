import React from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router";

import PostBackButton from "../components/post/PostBackButton/PostBackButton";
import PostContents from "../components/post/PostContents/PostContents";

const PostContainer = ({ postId, postType }) => {
  const token = 865320;
  const { data, isLoading } = useQuery(
    ["fetchPost", { postType, id: postId }],
    async () => {
      const data = await fetch(
        `https://recruit-api.yonple.com/recruit/${token}/${postType}-posts/${postId}`
      );
      const json = await data.json();
      return json;
    },
    {
      staleTime: Infinity,
    }
  );

  const history = useHistory();
  const onClickBackPage = () => {
    history.goBack();
  };

  if (isLoading) return <React.Fragment />;
  return (
    <React.Fragment>
      <PostContents data={data} />
      <PostBackButton onClickBackPage={onClickBackPage} />
    </React.Fragment>
  );
};

export default PostContainer;
