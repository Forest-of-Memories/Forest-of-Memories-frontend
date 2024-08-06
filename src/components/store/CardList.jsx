import React, { useState } from "react";
import styled from "styled-components";

import o2Image from "../../assets/imgs/o2.png";

const CardList = ({ cardsClass, cards, handleCardClick, isTreePurchased }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const toggleCheck = (name) => {
    setCheckedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <List>
      {cards?.map((item, index) => (
        <Card
          className={cardsClass}
          key={index}
          onClick={() => {
            handleCardClick(item);
            toggleCheck(item.name);
          }}
          purchased={isTreePurchased(item.name)}
          checked={checkedItems[item.name] || false}
        >
          <CardImage
            className={cardsClass}
            src={item.item_photo}
            alt={item.item_name}
          />
          <CardText className={cardsClass}>{item.item_name}</CardText>
          <CardPrice>
            <O2Icon src={o2Image} alt="O2" />
            {item.item_price}
          </CardPrice>
        </Card>
      ))}
    </List>
  );
};

export default CardList;

const List = styled.div`
  display: flex;
  height: 400px;
  overflow-y: auto;
  flex-wrap: wrap;
  gap: 22px;
  padding: 15px;
  justify-content: center;
  background-color: white;
  letter-spacing: -1.5px;
`;

const Card = styled.div`
  background-color: ${({ purchased, checked }) =>
    purchased
      ? "var(--gray-400)"
      : checked
        ? "var(--gray-100)"
        : "var(--gray-100)"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
  border-radius: 7px;
  cursor: pointer;
  position: relative;
  &.tree {
    height: auto;
    width: 45%;
  }
  &.background {
    height: auto;
    width: 90%;
  }
  &.object {
    height: auto;
    width: 29%;
  }
`;

const CardImage = styled.img`
  object-fit: contain;
  &.tree {
    height: 68%;
    width: 100%;
  }
  &.background {
    height: 70%;
    width: 100%;
  }
  &.object {
    height: 65%;
    width: 100%;
  }
`;

const CardText = styled.div`
  &.tree {
    font-size: 16px;
    padding-top: 15px;
  }
  &.background {
    font-size: 16px;
    padding-top: 10px;
  }
  &.object {
    font-size: 14px;
    padding-top: 2px;
  }
  color: var(--gray-900);
  padding-bottom: 2px;
`;

const O2Icon = styled.img`
  height: 14px;
  vertical-align: middle;
  margin-right: 3px;
`;

const CardPrice = styled.div`
  font-size: 11px;
  color: var(--gray-900);
`;
