import React, { useEffect, useState } from "react";
import Router from "./Router";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import LoadingScreen from "./components/common/loading-screen";
import { RouterProvider } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const [isLoding, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
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
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default App;
