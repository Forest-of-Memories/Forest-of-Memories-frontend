import React from "react";
import React, { useState } from "react";
import styled from "styled-components";

import o2Image from "../../assets/imgs/o2.png";

const CardList = ({ cards, handleCardClick, isTreePurchased }) => (
  <List>
    {cards.map((item, index) => (
      <Card
        key={index}
        onClick={() => handleCardClick(item)}
        purchased={isTreePurchased(item.name)}
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
        >
          <Checkbox checked={checkedItems[item.name] || false} readOnly />
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
  gap: 15px;
  padding: 10px;
  justify-content: flex-start;
`;

const Card = styled.div`
  flex: 0 1 calc(33.333% - 10px);
  background-color: ${({ purchased }) =>
    purchased ? "var(--gray-600)" : "var(--gray-400)"};
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 3px;
  border-radius: 7px;
  border: 1px solid
    ${({ purchased }) => (purchased ? "var(--gray-600)" : "var(--gray-400)")};
  cursor: pointer;
  position: relative; /* for checkbox positioning */
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 5px;
  right: 5px;
  pointer-events: none; /* make the checkbox unclickable */
`;

const CardImage = styled.img`
  height: 68%;
  width: 100%;
  object-fit: contain;
  margin-bottom: 2px;
`;

const CardText = styled.div`
  font-size: 13px;
  color: var(--gray-900);
  padding-bottom: 3px;
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
