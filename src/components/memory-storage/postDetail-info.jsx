import React from "react";
import styled from "styled-components";

const PostDetailInfo = ({ title, date, writer, people }) => {
  return (
    <Container>
      <TitleRow>
        <Title>{title}</Title>
        <Writer>by. {writer}</Writer>
      </TitleRow>
      <Date>{date}</Date>
      <People>👨‍👩‍👧‍👦 {people}</People>
    </Container>
  );
};

export default PostDetailInfo;

const Container = styled.div`
  padding: 10px 20px 10px;
  border-bottom: 2px solid #ccc;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 7px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-right: 10px;
`;

const Writer = styled.p`
  font-size: 15px;
  color: #555;
`;

const Date = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
`;

const People = styled.p`
  font-size: 14px;
  color: #777;
`;
