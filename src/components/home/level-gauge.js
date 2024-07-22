import { useState } from "react";
import styled from "styled-components";
import "../../styles/color.css";

const levelNames = ["-", "씨앗", "새싹", "묘목", "작은 나무", "큰 나무"];

const LevelGauge = () => {
  const [level, setLevel] = useState(3);
  const [progress, setProgress] = useState(5); // 40 / 100
  return (
    <Wrapper>
      <GaugeBox>
        <div className="gauge">
          {Array(progress)
            .fill(0)
            .map((_, key) => (
              <GaugeDetail className={`key${key}`} key={key} />
            ))}
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
  div {
    color: var(--red-600);
    font-weight: 800;
  }
`;

const GaugeDetail = styled.div`
  background-color: var(--red-600);
  width: 19.4%;
  height: 60%;
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
  height: 25px;
  margin-bottom: 10px;
  .gauge {
    background-color: var(--gray-200);
    width: 90%;
    border-radius: 20px;
    height: 90%;
    display: flex;
    overflow: hidden;
    align-items: center;
    padding-left: 12px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
`;
