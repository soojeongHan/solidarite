import React from "react";
import styled from "@emotion/styled";
import { Link as routerLink } from "react-router-dom";

const List = styled.ol`
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  border: 1px solid lightgrey;
  border-radius: 3px;
  box-sizing: border-box;
`;
const PostLink = styled(routerLink)`
  text-decoration: none;
  color: black;
`;
const Post = styled.li`
  padding: 1rem;
  list-style: none;
  transition-duration: 0.25s;
  &:hover {
    background: lightgrey;
  }
`;
const PostNumber = styled.span`
  font-weight: bolder;
  color: blue;
`;
const PostTitle = styled.span`
  font-weight: bolder;
`;
const PostContents = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 48px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ListContents = ({ data }) => {
  return (
    <List>
      {data.pages?.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page?.data?.map((elem, i) => (
            <PostLink key={i} to={`/${elem.type}?id=${elem.id}`}>
              <Post>
                <PostNumber>{elem.id}. </PostNumber>
                <PostTitle>{elem.title}</PostTitle>
                <PostContents>{elem.content}</PostContents>
              </Post>
            </PostLink>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ListContents;
