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
        장식
      </Tab>
    </Tabs>
  );
};

export default StoreTabs;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Tab = styled.div`
  letter-spacing: -1.5px;
  flex: 1;
  text-align: center;
  padding: 11px;
  margin: 0 17px;
  border-radius: 15px 15px 0 0;
  font-size: 21px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) =>
    active ? "var(--green-main)" : "var(--gray-color)"};
  background-color: ${({ active }) => (active ? "white" : "var(--bg-color)")};
  cursor: pointer;
`;
