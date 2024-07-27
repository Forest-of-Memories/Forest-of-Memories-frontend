import React from "react";
import styled from "styled-components";

import bigTreeImg from "../../assets/imgs/bigtree.png";

const TreeImageContainer = ({
  selectedTree,
  isTreePurchased,
  handleBuyClick,
}) => (
  <Container>
    <TreeImage>
      {selectedTree ? (
        <img src={selectedTree.image} alt={selectedTree.name} />
      ) : (
        <img src={bigTreeImg} alt="My Tree" />
      )}
    </TreeImage>
    {selectedTree &&
      (isTreePurchased(selectedTree.name) ? (
        <ApplyButton>적용하기</ApplyButton>
      ) : (
        <BuyButton onClick={handleBuyClick}>구매하기</BuyButton>
      ))}
  </Container>
);

export default TreeImageContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const TreeImage = styled.div`
  width: 50%;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-400);
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
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
  background-color: var(--gray-600); /* 적용하기 버튼의 색상 변경 */
`;
