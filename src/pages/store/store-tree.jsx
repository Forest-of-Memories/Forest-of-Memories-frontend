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
import TreeImageContainer from "../../components/store/TreeImageContainer";
import CardList from "../../components/store/CardList";
import Modal from "../../components/store/Modal";
import "../../styles/color.css";

import {
  treeSets,
  backgroundSets,
  objectSets,
} from "../../components/store/Dataset";

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
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [activeTab, setActiveTab] = useState("tree");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCardClick = (item) => {
    switch (activeTab) {
      case "tree":
        setSelectedTree((prevTree) =>
          prevTree?.name === item.name ? null : item
        );
        break;
      case "background":
        setSelectedBackground((prevBackground) =>
          prevBackground?.name === item.name ? null : item
        );
        break;
      case "object":
        setSelectedObjects((prevObjects) =>
          prevObjects.some((obj) => obj.name === item.name)
            ? prevObjects.filter((obj) => obj.name !== item.name)
            : [...prevObjects, item]
        );
        break;
      default:
        break;
    }
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
    const newPurchasedItems = [...purchasedItems];
    if (selectedTree && !newPurchasedItems.includes(selectedTree.name)) {
      newPurchasedItems.push(selectedTree.name);
    }
    if (
      selectedBackground &&
      !newPurchasedItems.includes(selectedBackground.name)
    ) {
      newPurchasedItems.push(selectedBackground.name);
    }
    selectedObjects.forEach((item) => {
      if (!newPurchasedItems.includes(item.name)) {
        newPurchasedItems.push(item.name);
      }
    });
    setPurchasedItems(newPurchasedItems);
    setShowModal(false);
  };

  const isTreePurchased = (itemName) => {
    return purchasedItems.includes(itemName);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    if (selectedTree) total += parseInt(selectedTree.price, 10);
    if (selectedBackground) total += parseInt(selectedBackground.price, 10);
    selectedObjects.forEach((obj) => {
      total += parseInt(obj.price, 10);
    });
    return total;
  };

  let cards;
  switch (activeTab) {
    case "background":
      cards = backgroundSets;
      break;
    case "object":
      cards = objectSets;
      break;
    default:
      cards = treeSets;
  }

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
        selectedBackground={selectedBackground}
        selectedObjects={selectedObjects}
        isTreePurchased={isTreePurchased}
        handleBuyClick={handleBuyClick}
      />
      <StoreTabs activeTab={activeTab} onTabClick={handleTabClick} />
      <CardList
        cards={cards}
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
        <Modal
          selectedTree={selectedTree}
          selectedBackground={selectedBackground}
          selectedObjects={selectedObjects}
          handleCloseModal={handleCloseModal}
          handleConfirmBuy={handleConfirmBuy}
          totalPrice={calculateTotalPrice()}
        />
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
