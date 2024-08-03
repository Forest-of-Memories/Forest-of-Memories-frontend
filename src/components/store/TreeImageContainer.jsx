import React from "react";
import styled from "styled-components";

import bigTreeImg from "../../assets/imgs/bigtree.png";

const TreeImageContainer = ({
  selectedTrees = [],
  selectedBackgrounds = [],
  selectedObjects = [],
  isTreePurchased,
  handleBuyClick,
}) => (
  <Container>
    {selectedBackgrounds.length > 0 && (
      <BackgroundImage
        src={selectedBackgrounds[selectedBackgrounds.length - 1].image}
        alt={selectedBackgrounds[selectedBackgrounds.length - 1].name}
      />
    )}
    {selectedTrees.length > 0 ? (
      <TreeImage>
        <img
          src={selectedTrees[selectedTrees.length - 1].image}
          alt={selectedTrees[selectedTrees.length - 1].name}
        />
      </TreeImage>
    ) : (
      <TreeImage>
        <img src={bigTreeImg} alt="My Tree" />
      </TreeImage>
    )}
    {selectedObjects.length > 0 && (
      <ObjectImage
        src={selectedObjects[selectedObjects.length - 1].image}
        alt={selectedObjects[selectedObjects.length - 1].name}
      />
    )}
    {(selectedTrees.length > 0 ||
      selectedBackgrounds.length > 0 ||
      selectedObjects.length > 0) && (
      <BuyButton onClick={handleBuyClick}>구매하기</BuyButton>
    )}
  </Container>
);

export default TreeImageContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 300px;
  background-color: var(--red-600);
`;

const TreeImage = styled.div`
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
  z-index: 1;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ObjectImage = styled.img`
  position: absolute;
  right: 22%;
  bottom: 3%;
  max-height: 25%;
  max-width: 25%;
  object-fit: contain;
  z-index: 2;
`;

const BuyButton = styled.button`
  position: absolute;
  right: 1%;
  padding: 3px 6px;
  background-color: var(--gray-900);
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 11px;
`;

const ApplyButton = styled(BuyButton)`
  background-color: var(--gray-600);
  z-index: 3;
`;
