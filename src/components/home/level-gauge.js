import { useState } from "react";
import styled from "styled-components";
import "../../styles/color.css";
const levelNames = ["-", "씨앗", "새싹", "묘목", "작은 나무", "큰 나무"];

const LevelGauge = ({ progress }) => {
  const [level, setLevel] = useState(3);
  return (
    <Wrapper>
      <GaugeBox>
        <div className="gauge">
          <div className="gauge-bg">
            {Array(progress)
              .fill(0)
              .map((_, key) => (
                <GaugeDetail className={`key${key}`} key={key} />
              ))}
          </div>
        </div>
      </GaugeBox>
      <LevelNameBox>
        <div className="current">{`Lv${level} ${levelNames[level]}`}</div>
        <div className="next">{`Lv${level + 1} ${levelNames[level + 1]}`}</div>
      </LevelNameBox>
    </Wrapper>
  );
};

export default LevelGauge;
const LevelNameBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  letter-spacing: -1.5px;
  div {
    color: var(--green-main);
    font-weight: 800;
  }
`;

const GaugeDetail = styled.div`
  background: rgb(72, 206, 173);
  background: linear-gradient(
    180deg,
    rgba(72, 206, 173, 1) 0%,
    rgba(72, 206, 173, 1) 22%,
    rgba(19, 176, 138, 1) 100%
  );
  width: 20%;
  height: 95%;
  z-index: 2;

  &.key0 {
    border-radius: 24px 0 0 24px;
    /* background-color: blue; */
  }
  &.key4 {
    border-radius: 0 24px 24px 0;
    /* background-color: blue; */
  }
`;

const GaugeBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  .gauge {
    padding: 0 5px;
    background-color: white;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    width: 90%;
    border-radius: 20px;
    height: 90%;
    display: flex;
    overflow: hidden;
    align-items: center;
    /* padding-left: 6px; */
    .gauge-bg {
      width: 100%;
      height: 60%;
      border-radius: 24px;
      display: flex;
      overflow: hidden;
      align-items: center;
      /* padding-left: 6px; */
      background: rgb(218, 241, 216);
      background: linear-gradient(
        180deg,
        rgba(218, 241, 216, 1) 0%,
        rgba(218, 241, 216, 1) 22%,
        rgba(170, 200, 168, 1) 100%
      );
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
  transform: translateY(-50%);
`;
