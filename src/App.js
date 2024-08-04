import React, { useEffect, useState } from "react";
import Router from "./Router";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import LoadingScreen from "./components/common/loading-screen";
import { RouterProvider } from "react-router-dom";

function App() {
  const [isLoding, setLoading] = useState(false);
  const init = async () => {
    //사용자가 로그인을 했냐 안했냐를 확인한다.
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <AppContainer>
      <GlobalStyle />
      {isLoding ? <LoadingScreen /> : <RouterProvider router={Router} />}
    </AppContainer>
  );
}
const AppContainer = styled.div`
  width: 56.25vh;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
  background-color: var(--bg-color);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default App;
