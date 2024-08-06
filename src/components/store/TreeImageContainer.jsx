import React from "react";
import styled from "styled-components";

import { ReactComponent as PreviousIcon } from "../../assets/icons/previous.svg";
import { useNavigate } from "react-router-dom";

const TreeImageContainer = ({
  selectedTrees,
  selectedBackgrounds,
  selectedObjects,
  isTreePurchased,
  handleBuyClick,
}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Back onClick={() => navigate(-1)}>
        <PreviousIcon />
      </Back>
      {selectedBackgrounds.length > 0 && (
        <BackgroundImage
          src={selectedBackgrounds[0].item_photo}
          alt={selectedBackgrounds[0].item_name}
        />
      )}
      {selectedTrees.length > 0 ? (
        <TreeImage>
          <img
            src={selectedTrees[0].item_photo}
            alt={selectedTrees[0].item_name}
          />
        </TreeImage>
      ) : (
        <TreeImage></TreeImage>
      )}
      {selectedObjects.length > 0 && (
        <ObjectImage
          src={selectedObjects[0].item_photo}
          alt={selectedObjects[0].item_name}
        />
      )}
      {(selectedTrees.length > 0 ||
        selectedBackgrounds.length > 0 ||
        selectedObjects.length > 0) && (
        <BuyButton onClick={handleBuyClick}>구매하기</BuyButton>
      )}
    </Container>
  );
};

export default TreeImageContainer;
const Back = styled.div`
  position: absolute;
  z-index: 4;
  top: 10px;
  left: 10px;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 46%;
`;

const TreeImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5%;
  z-index: 1;
  img {
    width: 70%;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ObjectImage = styled.img`
  position: absolute;
  right: 28%;
  bottom: 5%;
  max-height: 23%;
  max-width: 23%;
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
