import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StoreHeader from "./store-header";
import "../../styles/color.css";

const StoreDecoration = () => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    switch (tab) {
      case "tree":
        navigate("/store-tree");
        break;
      case "point":
        navigate("/store-point");
        break;
      default:
        navigate("/store-decoration");
    }
  };

  // 카드 배열로 추가
  const themeSets = ["크리스마스", "벚꽃나무", "하와이", "단풍나무"];
  const backgrounds = ["설경", "여름햇살", "바다", "노을"];
  const objects = ["선물상자", "강아지", "고양이"];

  return (
    <Wrapper>
      <StoreHeader activeTab="decoration" onTabClick={handleTabClick} />
      <Content>
        <Section>
          <SectionTitle>테마 세트</SectionTitle>
          <CardList>
            {themeSets.map((cardText, index) => (
              <Card key={index}>
                <CardText>{cardText}</CardText>
              </Card>
            ))}
          </CardList>
        </Section>
        <Section>
          <SectionTitle>배경</SectionTitle>
          <CardList>
            {backgrounds.map((cardText, index) => (
              <Card key={index}>
                <CardText>{cardText}</CardText>
              </Card>
            ))}
          </CardList>
        </Section>
        <Section>
          <SectionTitle>오브제</SectionTitle>
          <CardList>
            {objects.map((cardText, index) => (
              <Card key={index}>
                <CardText>{cardText}</CardText>
              </Card>
            ))}
          </CardList>
        </Section>
      </Content>
    </Wrapper>
  );
};

export default StoreDecoration;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 56.25vh;
  height: 100vh;
  background-color: var(--gray-50);
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  color: var(--gray-900);
  margin-bottom: 15px;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
`;

const Card = styled.div`
  flex: 0 1 calc(33.333% - 10px);
  background-color: var(--gray-400);
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--gray-400);
`;

const CardText = styled.div`
  font-size: 10px;
  color: var(--gray-900);
`;
