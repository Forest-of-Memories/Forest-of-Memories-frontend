import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostList = ({ posts }) => {
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/storage/post-detail/${id}`);
  };

  return (
    <Container>
      {posts.map((post) => (
        <PostCard key={post.id} onClick={() => handlePostClick(post.id)}>
          <PostImage src={post.image} alt={post.title} />
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
          </PostContent>
        </PostCard>
      ))}
    </Container>
  );
};

export default PostList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 12px 18px;
  letter-spacing: -1.5px;
`;

const PostCard = styled.div`
  width: 176px;
  height: 190px;

  background: #fff;
  //border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow: hidden;
  cursor: pointer;
  //width: calc(50% - 20px);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 9px 12px;
`;

const PostTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  padding-bottom: 5px;
`;

const PostDate = styled.p`
  font-size: 15px;
  font-weight: 100;
  color: var(--gray-color);
  margin: 0;
`;
