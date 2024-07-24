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

  return (
    <Wrapper>
      <StoreHeader activeTab="decoration" onTabClick={handleTabClick} />
      <Content>
        <Section>
          <SectionTitle>테마 세트</SectionTitle>
          <CardList>
            <Card>
              <CardText>크리스마스</CardText>
            </Card>
            <Card>
              <CardText>벚꽃나무</CardText>
            </Card>
            <Card>
              <CardText>하와이</CardText>
            </Card>
          </CardList>
        </Section>
        <Section>
          <SectionTitle>배경</SectionTitle>
          <CardList>
            <Card>
              <CardText>설경</CardText>
            </Card>
            <Card>
              <CardText>쨍쨍한 여름햇살</CardText>
            </Card>
            <Card>
              <CardText>노을</CardText>
            </Card>
          </CardList>
        </Section>
        <Section>
          <SectionTitle>오브제</SectionTitle>
          <CardList>
            <Card>
              <CardText>선물상자</CardText>
            </Card>
            <Card>
              <CardText>강아지</CardText>
            </Card>
            <Card>
              <CardText>고양이</CardText>
            </Card>
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
  /*margin: 0 auto; 이거 하면 안보이네*/
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
`;

const Card = styled.div`
  flex: 1 1 calc(25% - 20px);
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
