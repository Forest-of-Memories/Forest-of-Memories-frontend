import React from "react";
import styled from "styled-components";
import "../../styles/color.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToStoreDecoration = () => {
    navigate("/store-decoration");
  };
  return (
    <Wrapper>
      <h1>home</h1>
      <StoreButton onClick={goToStoreDecoration}>Store</StoreButton>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: var(--red-600);
  height: 100vh;
`;

const StoreButton = styled.button`
  background-color: var(--gray-800);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;

  &:hover {
    background-color: var(--red-600);
  }
`;
