import React from "react";
import Router from "./Router";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}
const AppContainer = styled.div`
  width: 456.25vh;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
  background-color: #f0f0f0;
`;

export default App;
