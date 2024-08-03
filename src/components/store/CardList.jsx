import React, { useState } from "react";
import styled from "styled-components";

import o2Image from "../../assets/imgs/o2.png";

const CardList = ({ cards, handleCardClick, isTreePurchased }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (name) => {
    setCheckedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <List>
      {cards.map((item, index) => (
        <Card
          key={index}
          onClick={() => {
            handleCardClick(item);
            toggleCheck(item.name);
          }}
          purchased={isTreePurchased(item.name)}
          checked={checkedItems[item.name] || false}
        >
          <CardImage src={item.image} alt={item.name} />
          <CardText>{item.name}</CardText>
          <CardPrice>
            <O2Icon src={o2Image} alt="O2" />
            {item.price}
          </CardPrice>
        </Card>
      ))}
    </List>
  );
};

export default CardList;

const List = styled.div`
  display: flex;
  overflow-y: auto;
  flex-wrap: wrap;
  gap: 25px;
  padding: 15px 27px;
  justify-content: flex-start;
`;

const Card = styled.div`
  flex: 0 1 101px;
  background-color: ${({ purchased, checked }) =>
    purchased
      ? "var(--gray-400)"
      : checked
        ? "var(--gray-200)"
        : "var(--gray-100)"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 3px;
  border-radius: 7px;
  cursor: pointer;
  position: relative;
`;

const CardImage = styled.img`
  height: 72%;
  width: 100%;
  object-fit: contain;
  margin-bottom: 2px;
`;

const CardText = styled.div`
  font-size: 13px;
  color: var(--gray-900);
  padding-top: 1px;
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
