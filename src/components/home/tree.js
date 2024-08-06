import styled from "styled-components";
import bigTreeImg from "../../assets/imgs/bigtree.png";
import "../../styles/color.css";
import { ReactComponent as WaterIcon } from "../../assets/icons/water.svg";
import CatSrc from "../../assets/imgs/3d-fluency-cat.png";
import { useEffect, useState } from "react";
import { instance } from "../../api/instance";

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
  progress,
  skin,
  setProgress,
  setClickedId,
  imgUrlList,
  level,
  handleClick,
}) => {
  const [treeSrc, setTreeSrc] = useState("");
  const [pos, setPos] = useState(posA);
  const [isDone, setIsDone] = useState(false);
  const [treeId, setTreeID] = useState(2);
  useEffect(() => {
    if (skin === "christmas") setPos(posB);
    else setPos(posA);
  }, [skin]);
  useEffect(() => {
    setTreeSrc(`tree-${skin}-${nums[level - 1]}`);
  }, [level, skin]);
  const handleWaterClick = async () => {
    if (progress === 23) {
      setIsDone(true);
      try {
        const res = await instance.post("/memory/memories/", {
          id: treeId,
          tree_start_dt: "2024-06-12",
          tree_end_dt: "2024-08-07",
          first_feed_id: null,
          second_feed_id: null,
          third_feed_id: null,
          skin_id: 1,
          family: 1,
        });
        console.log(res);
      } catch (error) {
        console.error("Error submitting answer:", error);
      } finally {
        setProgress(0);
        console.log(treeId);
        setTreeID(treeId + 1);
      }
    } else setProgress((prev) => prev + 1);
  };
  return (
    <Wrapper>
      <div className="tree-wrapper">
        {/* <img className="rain" src="/imgs/rain.png" /> */}
        <TreeImg
          className={`tree-${nums[level - 1]}`}
          src={`/imgs/${treeSrc}.png`}
          alt={`tree-${skin}-${nums[level - 1]}`}
        />
      </div>
      <WaterImg onClick={handleWaterClick}>
        <WaterIcon />
        <WaterLeft>{23 - progress >= 0 ? 23 - progress : "끝"}</WaterLeft>
      </WaterImg>
      <FertilizerImg>
        <img src={CatSrc} alt="cat" />
      </FertilizerImg>
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
            ></Pictures>
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
  width: 5.5rem;
  height: 5.5rem;
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
  @media (max-height: 700px) {
    width: 4rem;
    height: 4rem;
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
  background-color: #0085ff;
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
  left: 10%;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
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
    &:hover {
      filter: brightness(0.95);
    }
  }
`;

const FertilizerImg = styled.div`
  position: absolute;
  bottom: 2%;
  right: 15%;
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 100%;
  }
  z-index: 2;
  @media (max-height: 700px) {
    width: 6rem;
    bottom: 1%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  div {
    &.tree-wrapper {
      position: relative;
      width: 100%;
      height: 50vh;
      display: flex;
      align-items: end;
      justify-content: center;
    }
    .rain {
      position: absolute;
      top: 2%;
      width: 40%;
    }
  }
`;
