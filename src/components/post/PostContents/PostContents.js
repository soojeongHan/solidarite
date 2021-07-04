import React from "react";
import styled from "@emotion/styled";

const Post = styled.article`
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 2rem;
  margin-bottom: 1rem;
`;
const Title = styled.h2`
  font-size: 1.75rem;
  text-align: center;
  padding-bottom: 2rem;
`;
const Content = styled.p`
  font-size: 0.9rem;
`;

const PostContents = ({ data }) => {
  return (
    <Post>
      <Title>{data?.title}</Title>
      <Content>{data?.content}</Content>
    </Post>
  );
};

export default PostContents;
