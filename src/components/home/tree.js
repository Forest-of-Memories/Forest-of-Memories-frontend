import styled from "styled-components";
import bigTreeImg from "../../assets/imgs/bigtree.png";
import "../../styles/color.css";
import { ReactComponent as WaterIcon } from "../../assets/icons/water.svg";
import { useEffect, useState } from "react";

const posA = [
  { left: "35%", top: "15%", deg: "30deg" },
  { left: "25%", top: "40%", deg: "45deg" },
  { left: "55%", top: "30%", deg: "-30deg" },
];
const posB = [
  { left: "39%", top: "20%", deg: "30deg" },
  { left: "29%", top: "45%", deg: "45deg" },
  { left: "49%", top: "57%", deg: "-30deg" },
];
const nums = ["one", "two", "three", "four"];
const Tree = ({
  skin,
  setProgress,
  setClickedId,
  imgUrlList,
  level,
  handleClick,
}) => {
  const [treeSrc, setTreeSrc] = useState("");
  const [pos, setPos] = useState("");
  useEffect(() => {
    if (skin === "christmas") setPos(posB);
    else setPos(posA);
  }, []);
  useEffect(() => {
    setTreeSrc(`tree-${skin}-${nums[level - 1]}`);
  }, [level]);
  return (
    <Wrapper>
      <div className="tree-wrapper">
        <TreeImg
          className={`tree-${nums[level - 1]}`}
          src={`/imgs/${treeSrc}.png`}
          alt={`tree-${skin}-${nums[level - 1]}`}
        />
      </div>
      <WaterImg onClick={() => setProgress((prev) => prev + 1)}>
        <WaterIcon />
        <WaterLeft>2</WaterLeft>
      </WaterImg>
      <FertilizerImg>비료주머니</FertilizerImg>
      {level === 4
        ? pos.map((el, key) => (
            <Pictures
              bgImage={imgUrlList[key]}
              onClick={() => {
                handleClick();
                setClickedId(key);
              }}
              key={key}
              deg={el.deg}
              left={el.left}
              top={el.top}
            >
              {key}
            </Pictures>
          ))
        : null}
    </Wrapper>
  );
};

export default Tree;

const Pictures = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  background-color: var(--red-600);
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotateZ(${(props) => props.deg});
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  cursor: pointer;
  &:hover {
    filter: saturate(0.5);
  }
  &:active {
    scale: 0.9;
  }
`;

const TreeImg = styled.img`
  height: 80%;
  &.tree-one {
    height: 40%;
  }
  &.tree-two {
    height: 60%;
  }
  &.tree-four {
    height: 100%;
  }
`;
const WaterLeft = styled.div`
  background-color: var(--green-main);
  border-radius: 50%;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 10px;
  padding: 5px;
  font-weight: 800;
`;
const WaterImg = styled.div`
  position: absolute;
  bottom: 10%;
  left: 20%;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    /* background-color: var(--gray-600); */
    color: white;
  }
  &:active {
    scale: 0.9;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

const FertilizerImg = styled.div`
  position: absolute;
  bottom: 10%;
  right: 15%;
  border-radius: 50%;
  background-color: var(--gray-200);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  div {
    &.tree-wrapper {
      width: 100%;
      height: 50vh;
      display: flex;
      align-items: end;
      justify-content: center;
    }
  }
`;
