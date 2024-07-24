import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StoreHeader from "./store-header";
import "../../styles/color.css";

const StoreTree = () => {
  const navigate = useNavigate();
  const [selectedTree, setSelectedTree] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
    { name: "크리스마스 나무", price: "🪙100", image: "christmas-tree-url" },
    { name: "벚꽃나무", price: "🪙200", image: "cherry-blossom-tree-url" },
    { name: "야자수", price: "🪙300", image: "palm-tree-url" },
    { name: "단풍나무", price: "🪙150", image: "maple-tree-url" },
    { name: "소나무", price: "🪙250", image: "pine-tree-url" },
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
    // 구매 확정 로직 추가해야됨
    setShowModal(false);
  };

  return (
    <Wrapper>
      <TreeImageContainer>
        <TreeImage>
          {selectedTree ? (
            <img src={selectedTree.image} alt={selectedTree.name} />
          ) : (
            <img src="tree-image-url" alt="My Tree" />
          )}
        </TreeImage>
        {selectedTree && (
          <BuyButton onClick={handleBuyClick}>구매하기</BuyButton>
        )}
      </TreeImageContainer>
      <StoreHeader activeTab="tree" onTabClick={handleTabClick} />
      <CardList>
        {treeSets.map((tree, index) => (
          <Card key={index} onClick={() => handleCardClick(tree)}>
            <CardText>{tree.name}</CardText>
            <CardPrice>{tree.price}</CardPrice>
          </Card>
        ))}
      </CardList>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <p>{selectedTree.name}를 구매 확정하시겠습니까?</p>
            <BalancePoint>현재 잔여 산소 : 🪙</BalancePoint>
            <ModalPrice>{selectedTree.price}</ModalPrice>
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
  justify-content: space-between;
  width: 56.25vh;
  height: 100vh;
  background-color: var(--gray-50);
`;

const TreeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const TreeImage = styled.div`
  width: 50%;
  height: 200px; /* 나무가 차지할 높이 */
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
  padding: 5px 8px;
  background-color: var(--gray-900);
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

const CardList = styled.div`
  display: flex;
  overflow-y: auto;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px;
  justify-content: flex-start;
`;

const Card = styled.div`
  flex: 0 1 calc(33.333% - 10px);
  background-color: var(--gray-400);
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 3px;
  border-radius: 7px;
  border: 1px solid var(--gray-400);
`;

const CardText = styled.div`
  font-size: 12px;
  color: var(--gray-900);
  padding-bottom: 3px;
`;

const CardPrice = styled.div`
  font-size: 10px;
  color: var(--gray-900);
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
  padding: 15px 20px;
  border-radius: 10px;
  text-align: center;
`;

const BalancePoint = styled.p`
  font-size: 14px;
  margin-top: 8px;
`;

const ModalPrice = styled.p`
  font-size: 22px;
  margin-top: 14px;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const ModalButton = styled.button`
  padding: 10px 15px;
  background-color: var(--gray-900);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:first-child {
    background-color: var(--gray-600);
  }
`;
