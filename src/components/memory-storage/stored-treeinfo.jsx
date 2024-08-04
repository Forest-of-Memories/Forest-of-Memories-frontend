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
  margin-top: 20px;
`;

const TreeNum = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--green-main);
  letter-spacing: -1.5px;
`;

const Dates = styled.p`
  padding-top: 5px;
  font-size: 14px;
  color: var(--gray-600);
  letter-spacing: -1.5px;
`;
