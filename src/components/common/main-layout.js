import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
