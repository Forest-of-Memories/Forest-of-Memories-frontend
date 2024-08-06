import styled from "styled-components";

export default function LoadingScreen() {
  return (
    <Wrapper>
      <img src="/imgs/loading.gif" />
      <div>로그인 여부를 확인 중입니다...</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
