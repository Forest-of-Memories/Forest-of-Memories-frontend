import React from "react";
import styled from "styled-components";
import o2Image from "../../assets/imgs/o2.png";

const Modal = ({
  selectedTree,
  selectedBackground,
  selectedObjects,
  handleCloseModal,
  handleConfirmBuy,
  totalPrice,
}) => (
  <ModalOverlay>
    <ModalContent>
      <p>구매 확정하시겠습니까?</p>
      {selectedTree && (
        <ModalPrice>
          {selectedTree.name} : <O2Icon src={o2Image} alt="O2" />
          {selectedTree.price}
        </ModalPrice>
      )}
      {selectedBackground && (
        <ModalPrice>
          {selectedBackground.name} : <O2Icon src={o2Image} alt="O2" />
          {selectedBackground.price}
        </ModalPrice>
      )}
      {selectedObjects.map((obj) => (
        <ModalPrice key={obj.name}>
          {obj.name} : <O2Icon src={o2Image} alt="O2" />
          {obj.price}
        </ModalPrice>
      ))}
      <ModalTotalPrice>
        총액 : <O2Icon src={o2Image} alt="O2" /> {totalPrice}
      </ModalTotalPrice>
      <BalancePoint>
        현재 잔여 산소 : <O2Icon src={o2Image} alt="O2" />
      </BalancePoint>
      <ButtonContainer>
        <ModalButton onClick={handleCloseModal}>취소</ModalButton>
        <ModalButton onClick={handleConfirmBuy}>네</ModalButton>
      </ButtonContainer>
    </ModalContent>
  </ModalOverlay>
);

export default Modal;

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
  z-index: 4;
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
  margin-top: 7px;
`;

const ModalTotalPrice = styled.p`
  font-size: 17px;
  font-weight: bold;
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
