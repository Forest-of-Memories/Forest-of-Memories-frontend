import React from "react";
import styled from "styled-components";

const TreeInfo = ({ num, dates, days, postsCount }) => (
  <InfoContainer>
    <p> {num}번째 나무</p>
    <p>{dates}</p>
    <p>{days}일</p>
    <p>작성한 글: {postsCount}개</p>
  </InfoContainer>
);

export default TreeInfo;

const InfoContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  p {
    margin: 5px 0;
    font-size: 14px;
    color: var(--gray-700);
  }
`;
