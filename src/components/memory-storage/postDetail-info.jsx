import React from "react";
import styled from "styled-components";

const PostDetailInfo = ({ title, date, writer, people }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <Writer>by. {writer}</Writer>
      </TitleContainer>
      <Date>{date}</Date>
      <People>👨‍👩‍👧‍👦{people}</People>
    </Container>
  );
};

export default PostDetailInfo;

const Container = styled.div`
  padding: 50px 20px 10px;
  border-bottom: 2px solid #ccc;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end; /* 아래선 일치하도록 설정 */
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 6px;
`;

const Writer = styled.p`
  font-size: 14px;
  margin-bottom: 9px;
  margin-left: 10px;
`;

const Date = styled.p`
  font-size: 15px;
  color: #777;
  margin-bottom: 5px;
`;

const People = styled.p`
  font-size: 16px;
  color: #777;
`;
