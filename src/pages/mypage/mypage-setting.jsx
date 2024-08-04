import React from "react";
import My from "../../components/mypage/MyPageComponent";
import styled from "styled-components";

const MyPage = () => {
  return (
    <Wrapper>
      <My />
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
