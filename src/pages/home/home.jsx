import styled from "styled-components";
import "../../styles/color.css";
import Tree from "../../components/home/tree";
import LevelGauge from "../../components/home/level-gauge";
import Notifications from "../../components/home/notifications";

const Home = () => {
  return (
    <Wrapper>
      <DurationBox>
        <div className="date">2024.07.17</div>
        <div className="desc">부터 키우고 있어요</div>
      </DurationBox>
      <Title>
        <div>매일 질문에 대한 답을 남기며</div>
        <div>
          <span>우리 가족만의 나무</span>를 키워보아요!
        </div>
      </Title>
      <Tree />
      <LevelGauge />
      <Notifications />
    </Wrapper>
  );
};

export default Home;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.8rem;
    span {
      color: var(--red-600);
    }
  }
`;

const DurationBox = styled.div`
  display: flex;
  justify-content: center;
  color: var(--red-600);
  align-items: end;
  .date {
    font-size: 32px;
    font-weight: 800;
  }
  .desc {
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr 10fr 2fr 6fr;
`;
