import React from "react";
import styled from "styled-components";

const PostList = ({ posts }) => (
  <List>
    {posts.map((post) => (
      <Post key={post.id}>
        <PostImage src={post.image} alt={post.title} />
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>
          <PostPeople>{post.people}</PostPeople>
          <PostDescription>{post.description}</PostDescription>
        </PostContent>
      </Post>
    ))}
  </List>
);

export default PostList;

const List = styled.div`
  width: 100%;
  padding: 10px;
`;

const Post = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const PostImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const PostTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 10px;
`;

const PostDate = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0 0 5px;
`;

const PostPeople = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0 0 10px;
`;

const PostDescription = styled.p`
  font-size: 14px;
`;
