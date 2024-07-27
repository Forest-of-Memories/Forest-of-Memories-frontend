import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StoreTabs from "../../components/store/store-tabs";
import "../../styles/color.css";

import christmasTreeImage from "../../assets/imgs/christmas-tree.png";
import cherryblossomTreeImage from "../../assets/imgs/cherryblossom-tree.png";
import palmTreeImage from "../../assets/imgs/palm-tree.png";
import mapleTreeImage from "../../assets/imgs/maple-tree.png";
import baobopTreeImage from "../../assets/imgs/baobop-tree.png";
import o2Image from "../../assets/imgs/o2.png";

import TreeImageContainer from "../../components/store/TreeImageContainer";
import CardList from "../../components/store/CardList";

const StoreTree = () => {
  const navigate = useNavigate();
  const [selectedTree, setSelectedTree] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [purchasedTrees, setPurchasedTrees] = useState([]);

  const handleTabClick = (tab) => {
    switch (tab) {
      case "background":
        navigate("/store-background");
        break;
      case "object":
        navigate("/store-object");
        break;
      default:
        navigate("/store-tree");
    }
  };

  // 카드 배열로 추가
  const treeSets = [
    { name: "크리스마스 나무", price: "100", image: christmasTreeImage },
    { name: "벚꽃나무", price: "200", image: cherryblossomTreeImage },
    { name: "야자수", price: "300", image: palmTreeImage },
    { name: "단풍나무", price: "150", image: mapleTreeImage },
    { name: "바오밥나무", price: "250", image: baobopTreeImage },
  ];

  const handleCardClick = (tree) => {
    setSelectedTree(tree);
  };

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmBuy = () => {
    if (selectedTree && !purchasedTrees.includes(selectedTree.name)) {
      setPurchasedTrees([...purchasedTrees, selectedTree.name]);
    }
    setShowModal(false);
  };

  const isTreePurchased = (treeName) => {
    return purchasedTrees.includes(treeName);
  };

  return (
    <Wrapper>
      <TreeImageContainer
        selectedTree={selectedTree}
        isTreePurchased={isTreePurchased}
        handleBuyClick={handleBuyClick}
      />
      <StoreTabs activeTab="tree" onTabClick={handleTabClick} />
      <CardList
        cards={treeSets}
        handleCardClick={handleCardClick}
        isTreePurchased={isTreePurchased}
      />
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <p>구매 확정하시겠습니까?</p>
            <ModalPrice>
              {selectedTree.name} : <O2Icon src={o2Image} alt="O2" />
              {selectedTree.price}
            </ModalPrice>
            <BalancePoint>
              현재 잔여 산소 : <O2Icon src={o2Image} alt="O2" />
            </BalancePoint>
            <ButtonContainer>
              <ModalButton onClick={handleCloseModal}>취소</ModalButton>
              <ModalButton onClick={handleConfirmBuy}>네</ModalButton>
            </ButtonContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

export default StoreTree;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 56.25vh;
  height: 100%;
  background-color: var(--gray-50);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 15px 30px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
`;

const ModalPrice = styled.p`
  font-size: 17px;
  margin-top: 14px;
`;

const BalancePoint = styled.p`
  font-size: 15px;
  margin-top: 8px;
`;

const O2Icon = styled.img`
  height: 14px;
  vertical-align: middle;
  margin-right: 3px;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const ModalButton = styled.button`
  padding: 7px 11px;
  background-color: var(--gray-900);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  font-size: 14px;

  &:first-child {
    background-color: var(--gray-600);
  }
`;
