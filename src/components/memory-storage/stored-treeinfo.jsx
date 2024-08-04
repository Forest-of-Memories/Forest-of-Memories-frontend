import React from "react";
import styled from "styled-components";

const TreeInfo = ({ num, dates, days, postsCount }) => (
  <InfoContainer>
    <TreeNum>{num}번째 나무</TreeNum>
    <Dates>
      {dates} • 총 {days}일
    </Dates>
  </InfoContainer>
);

export default TreeInfo;

const InfoContainer = styled.div`
  text-align: left;
  padding-left: 18px;
`;

const TreeNum = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: var(--gray-700);
`;

const Dates = styled.p`
  padding-top: 5px;
  font-size: 14px;
  color: var(--gray-600);
`;
