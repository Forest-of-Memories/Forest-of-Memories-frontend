import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as RightIcon } from "../../assets/icons/right.svg";
import { ReactComponent as LeftIcon } from "../../assets/icons/left.svg";
const StoredTree = ({ image, handlePrevious, handleNext }) => (
  <Container>
    <ArrowButton direction="left" onClick={handlePrevious}>
      <LeftIcon />
    </ArrowButton>
    <TreeImage>
      <img src={image} alt="Stored Tree" />
    </TreeImage>
    <ArrowButton direction="right" onClick={handleNext}>
      <RightIcon />
    </ArrowButton>
  </Container>
);

export default StoredTree;

const Container = styled.div`
  display: flex;
  flex-direction: co lumn;
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
  height: 340px;

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
  //background-color: beige;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  color: var(--pink-main);
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
`;
