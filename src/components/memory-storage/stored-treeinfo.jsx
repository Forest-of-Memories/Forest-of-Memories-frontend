import React from "react";
import styled from "styled-components";

const TreeInfo = ({ num, dates, days, postsCount }) => (
  <InfoContainer>
    <TreeNum>{num}번째 나무</TreeNum>
    <Dates>{dates}</Dates>
    <Days>{days}일</Days>
  </InfoContainer>
);

export default TreeInfo;

const InfoContainer = styled.div`
  text-align: center;
`;

const TreeNum = styled.p`
  //margin: 5px 0;
  font-size: 16px;
  font-weight: bold;
  color: var(--gray-700);
`;

const Dates = styled.p`
  margin: 5px 0 2px;
  //margin-top: 10px;
  font-size: 14px;
  color: var(--gray-600);
`;

const Days = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  color: var(--gray-600);
`;
