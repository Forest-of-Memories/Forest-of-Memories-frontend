import React from "react";
import styled from "styled-components";

const StoreTabs = ({ activeTab, onTabClick }) => {
  return (
    <Tabs>
      <Tab active={activeTab === "tree"} onClick={() => onTabClick("tree")}>
        나무
      </Tab>
      <Tab
        active={activeTab === "background"}
        onClick={() => onTabClick("background")}
      >
        배경
      </Tab>
      <Tab active={activeTab === "object"} onClick={() => onTabClick("object")}>
        오브제
      </Tab>
    </Tabs>
  );
};

export default StoreTabs;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 5px;
  background-color: white;
`;

const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 9px 0;
  font-size: 21px;
  border-bottom: ${({ active }) =>
    active ? "2px solid var(--red-600)" : "none"};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "var(--red-600)" : "#333")};
  cursor: pointer;
`;
