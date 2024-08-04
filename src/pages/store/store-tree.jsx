// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import StoreTabs from "../../components/store/store-tabs";

// import TreeImageContainer from "../../components/store/TreeImageContainer";
// import CardList from "../../components/store/CardList";
// import Modal from "../../components/store/Modal";
// import "../../styles/color.css";

// import {
//   treeSets,
//   backgroundSets,
//   objectSets,
// } from "../../components/store/Dataset";

// const StoreTree = () => {
//   const navigate = useNavigate();
//   const [selectedTrees, setSelectedTrees] = useState([]);
//   const [selectedBackgrounds, setSelectedBackgrounds] = useState([]);
//   const [selectedObjects, setSelectedObjects] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [purchasedItems, setPurchasedItems] = useState([]);
//   const [activeTab, setActiveTab] = useState("tree");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleCardClick = (item) => {
//     switch (activeTab) {
//       case "tree":
//         setSelectedTrees((prevTrees) =>
//           prevTrees.some((tree) => tree.name === item.name)
//             ? prevTrees.filter((tree) => tree.name !== item.name)
//             : [...prevTrees, item]
//         );
//         break;
//       case "background":
//         setSelectedBackgrounds((prevBackgrounds) =>
//           prevBackgrounds.some((bg) => bg.name === item.name)
//             ? prevBackgrounds.filter((bg) => bg.name !== item.name)
//             : [...prevBackgrounds, item]
//         );
//         break;
//       case "object":
//         setSelectedObjects((prevObjects) =>
//           prevObjects.some((obj) => obj.name === item.name)
//             ? prevObjects.filter((obj) => obj.name !== item.name)
//             : [...prevObjects, item]
//         );
//         break;
//       default:
//         break;
//     }
//   };

//   const handleBuyClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleConfirmBuy = () => {
//     const newPurchasedItems = [...purchasedItems];
//     selectedTrees.forEach((item) => {
//       if (!newPurchasedItems.includes(item.name)) {
//         newPurchasedItems.push(item.name);
//       }
//     });
//     selectedBackgrounds.forEach((item) => {
//       if (!newPurchasedItems.includes(item.name)) {
//         newPurchasedItems.push(item.name);
//       }
//     });
//     selectedObjects.forEach((item) => {
//       if (!newPurchasedItems.includes(item.name)) {
//         newPurchasedItems.push(item.name);
//       }
//     });
//     setPurchasedItems(newPurchasedItems);
//     setShowModal(false);
//   };

//   const isTreePurchased = (itemName) => {
//     return purchasedItems.includes(itemName);
//   };

//   const calculateTotalPrice = () => {
//     let total = 0;
//     selectedTrees.forEach((tree) => {
//       total += parseInt(tree.price, 10);
//     });
//     selectedBackgrounds.forEach((bg) => {
//       total += parseInt(bg.price, 10);
//     });
//     selectedObjects.forEach((obj) => {
//       total += parseInt(obj.price, 10);
//     });
//     return total;
//   };

//   let cards;
//   switch (activeTab) {
//     case "background":
//       cards = backgroundSets;
//       break;
//     case "object":
//       cards = objectSets;
//       break;
//     default:
//       cards = treeSets;
//   }

//   return (
//     <Wrapper>
//       <TreeImageContainer
//         selectedTrees={selectedTrees}
//         selectedBackgrounds={selectedBackgrounds}
//         selectedObjects={selectedObjects}
//         isTreePurchased={isTreePurchased}
//         handleBuyClick={handleBuyClick}
//       />
//       <StoreTabs activeTab={activeTab} onTabClick={handleTabClick} />
//       <CardList
//         cards={cards}
//         handleCardClick={handleCardClick}
//         isTreePurchased={isTreePurchased}
//       />
//       {showModal && (
//         <Modal
//           selectedTrees={selectedTrees}
//           selectedBackgrounds={selectedBackgrounds}
//           selectedObjects={selectedObjects}
//           handleCloseModal={handleCloseModal}
//           handleConfirmBuy={handleConfirmBuy}
//           totalPrice={calculateTotalPrice()}
//         />
//       )}
//     </Wrapper>
//   );
// };

// export default StoreTree;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   width: 56.25vh;
//   height: 100%;
// `;

import React, { useState } from "react";
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

const StoreTree = () => {
  const navigate = useNavigate();
  const [selectedTrees, setSelectedTrees] = useState([]);
  const [selectedBackgrounds, setSelectedBackgrounds] = useState([]);
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
        setSelectedTrees([item]); // 마지막으로 선택된 나무만 유지
        break;
      case "background":
        setSelectedBackgrounds([item]); // 마지막으로 선택된 배경만 유지
        break;
      case "object":
        setSelectedObjects([item]); // 마지막으로 선택된 장식만 유지
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
    const newPurchasedItems = [...purchasedItems];
    if (selectedTrees.length > 0) {
      if (!newPurchasedItems.includes(selectedTrees[0].name)) {
        newPurchasedItems.push(selectedTrees[0].name);
      }
    }
    if (selectedBackgrounds.length > 0) {
      if (!newPurchasedItems.includes(selectedBackgrounds[0].name)) {
        newPurchasedItems.push(selectedBackgrounds[0].name);
      }
    }
    if (selectedObjects.length > 0) {
      if (!newPurchasedItems.includes(selectedObjects[0].name)) {
        newPurchasedItems.push(selectedObjects[0].name);
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
      total += parseInt(selectedTrees[0].price, 10);
    }
    if (selectedBackgrounds.length > 0) {
      total += parseInt(selectedBackgrounds[0].price, 10);
    }
    if (selectedObjects.length > 0) {
      total += parseInt(selectedObjects[0].price, 10);
    }
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
        selectedTrees={selectedTrees}
        selectedBackgrounds={selectedBackgrounds}
        selectedObjects={selectedObjects}
        isTreePurchased={isTreePurchased}
        handleBuyClick={handleBuyClick}
      />
      <StoreTabs activeTab={activeTab} onTabClick={handleTabClick} />
      <CardList
        cards={cards}
        cardsClass={activeTab}
        handleCardClick={handleCardClick}
        isTreePurchased={isTreePurchased}
      />
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
  width: 56.25vh;
  height: 100%;
`;
