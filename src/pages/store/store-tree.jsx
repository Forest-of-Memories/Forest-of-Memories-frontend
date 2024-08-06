import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StoreTabs from "../../components/store/store-tabs";

import TreeImageContainer from "../../components/store/TreeImageContainer";
import CardList from "../../components/store/CardList";
import Modal from "../../components/store/Modal";
import "../../styles/color.css";

import {
  treeSets,
  backgroundSets,
  objectSets,
} from "../../components/store/Dataset";
import { instance } from "../../api/instance";

const StoreTree = () => {
  const navigate = useNavigate();
  const [selectedTrees, setSelectedTrees] = useState([]);
  const [selectedBackgrounds, setSelectedBackgrounds] = useState([]);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [activeTab, setActiveTab] = useState("tree");
  const [shopData, setShopData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(`/memory/shop-items`);
        setShopData(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        console.log(shopData);
      }
    };
    fetchData();
  }, []);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCardClick = (item) => {
    switch (activeTab) {
      case "tree":
        setSelectedTrees([item]); // 마지막으로 선택된 나무만 유지
        console.log(selectedTrees);
        break;
      case "background":
        setSelectedBackgrounds([item]); // 마지막으로 선택된 배경만 유지
        break;
      case "object":
        setSelectedObjects([item]); // 마지막으로 선택된 장식만 유지
        break;
      default:
        console.log(selectedTrees);
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
    const newPurchasedItems = [...purchasedItems];
    if (selectedTrees.length > 0) {
      if (!newPurchasedItems.includes(selectedTrees[0].item_name)) {
        newPurchasedItems.push(selectedTrees[0].item_name);
      }
    }
    if (selectedBackgrounds.length > 0) {
      if (!newPurchasedItems.includes(selectedBackgrounds[0].item_name)) {
        newPurchasedItems.push(selectedBackgrounds[0].item_name);
      }
    }
    if (selectedObjects.length > 0) {
      if (!newPurchasedItems.includes(selectedObjects[0].item_name)) {
        newPurchasedItems.push(selectedObjects[0].item_name);
      }
    }
    setPurchasedItems(newPurchasedItems);
    setShowModal(false);
  };

  const isTreePurchased = (itemName) => {
    return purchasedItems.includes(itemName);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    if (selectedTrees.length > 0) {
      total += parseInt(selectedTrees[0].item_price, 10);
    }
    if (selectedBackgrounds.length > 0) {
      total += parseInt(selectedBackgrounds[0].item_price, 10);
    }
    if (selectedObjects.length > 0) {
      total += parseInt(selectedObjects[0].item_price, 10);
    }
    return total;
  };

  let cards;
  switch (activeTab) {
    case "background":
      cards = shopData?.filter((el) => el.item_type === "background");
      break;
    case "object":
      cards = shopData?.filter((el) => el.item_type === "object");
      break;
    default:
      cards = shopData?.filter((el) => el.item_type === "tree");
  }

  return (
    <Wrapper>
      <TreeImageContainer
        selectedTrees={selectedTrees}
        selectedBackgrounds={selectedBackgrounds}
        selectedObjects={selectedObjects}
        isTreePurchased={isTreePurchased}
        handleBuyClick={handleBuyClick}
      />
      <StoreTabs activeTab={activeTab} onTabClick={handleTabClick} />
      {shopData ? (
        <CardList
          cards={cards}
          cardsClass={activeTab}
          handleCardClick={handleCardClick}
          isTreePurchased={isTreePurchased}
        />
      ) : null}
      {showModal && (
        <Modal
          selectedTrees={selectedTrees}
          selectedBackgrounds={selectedBackgrounds}
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
  width: 100%;
  height: 100%;
`;
