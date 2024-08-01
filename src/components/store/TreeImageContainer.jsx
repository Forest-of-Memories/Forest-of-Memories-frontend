import React from "react";
import styled from "styled-components";

import bigTreeImg from "../../assets/imgs/bigtree.png";

const TreeImageContainer = ({
  selectedTree,
  selectedBackground,
  selectedObjects,
  isTreePurchased,
  handleBuyClick,
}) => (
  <Container>
    {selectedBackground && (
      <BackgroundImage
        src={selectedBackground.image}
        alt={selectedBackground.name}
      />
    )}
    <TreeImage>
      {selectedTree ? (
        <img src={selectedTree.image} alt={selectedTree.name} />
      ) : (
        <img src={bigTreeImg} alt="My Tree" />
      )}
    </TreeImage>
    {selectedObjects.map((object, index) => (
      <ObjectImage key={index} src={object.image} alt={object.name} />
    ))}
    {((selectedTree && !isTreePurchased(selectedTree.name)) ||
      (selectedBackground && !isTreePurchased(selectedBackground.name)) ||
      selectedObjects.some((obj) => !isTreePurchased(obj.name))) && (
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
  height: 230px;
`;

const TreeImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  //z-index: -1;
`;

const ObjectImage = styled.img`
  position: absolute;
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
  z-index: 3;
`;
