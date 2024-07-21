import React from "react";
import styled from "styled-components";

const StoreHeader = ({ activeTab, onTabClick }) => {
  return (
    <Tabs>
      <Tab
        active={activeTab === "decoration"}
        onClick={() => onTabClick("decoration")}
      >
        꾸미기
      </Tab>
      <Tab active={activeTab === "tree"} onClick={() => onTabClick("tree")}>
        나무
      </Tab>
      <Tab active={activeTab === "point"} onClick={() => onTabClick("point")}>
        충전소
      </Tab>
    </Tabs>
  );
};

export default StoreHeader;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0 0 0;
  background-color: white;
`;

const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px 0 15px 0;
  font-size: 22px;
  border-bottom: ${({ active }) =>
    active ? "2px solid var(--red-600)" : "none"};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "var(--red-600)" : "#333")};
  cursor: pointer;
`;
