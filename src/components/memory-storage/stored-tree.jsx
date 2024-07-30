import React, { useState } from "react";
import styled from "styled-components";

const StoredTree = ({ image, handlePrevious, handleNext }) => (
  <Container>
    <ArrowButton direction="left" onClick={handlePrevious}>
      ←
    </ArrowButton>
    <TreeImage>
      <img src={image} alt="Stored Tree" />
    </TreeImage>
    <ArrowButton direction="right" onClick={handleNext}>
      →
    </ArrowButton>
  </Container>
);

export default StoredTree;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: 100%;
  position: relative;
`;

const TreeImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 75%;
  height: 330px;

  background-color: var(--gray-400);
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "left" ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background-color: var(--gray-800);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
`;
