import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostList = ({ posts }) => {
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/storage-gallery/PostDetail/${id}`);
  };

  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.id} onClick={() => handlePostClick(post.id)}>
          <PostImage src={post.image} alt={post.title} />
          <PostContent>
            <TitleRow>
              <PostTitle>{post.title}</PostTitle>
              <PostWriter>by. {post.writer}</PostWriter>
            </TitleRow>
            <PostDate>{post.date}</PostDate>
            <PostPeople>{post.people}</PostPeople>
            <PostDescription>{post.description}</PostDescription>
          </PostContent>
        </Post>
      ))}
    </Container>
  );
};

export default PostList;

const Container = styled.div`
  width: 100%;
  height: 33vh;
  padding: 0 10px;
`;

const Post = styled.div`
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const PostImage = styled.img`
  width: 105px;
  height: 105px;
  object-fit: cover;
  border-radius: 8px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const TitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const PostTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-right: 10px;
`;

const PostWriter = styled.h2`
  font-size: 14px;
  color: #666;
`;

const PostDate = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 3px;
`;

const PostPeople = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0 0 12px;
`;

const PostDescription = styled.p`
  font-size: 14px;
`;
