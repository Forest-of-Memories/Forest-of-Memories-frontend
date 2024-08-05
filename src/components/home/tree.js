import styled from "styled-components";
import bigTreeImg from "../../assets/imgs/bigtree.png";
import "../../styles/color.css";
import { ReactComponent as WaterIcon } from "../../assets/icons/water.svg";

const pos = [
  { left: "50%", top: "5%", deg: "30deg" },
  { left: "30%", top: "20%", deg: "45deg" },
  { left: "50%", top: "40%", deg: "-30deg" },
];

const Tree = ({
  setProgress,
  setClickedId,
  imgUrlList,
  level,
  handleClick,
}) => {
  return (
    <Wrapper>
      <TreeImg src={bigTreeImg} alt="" />
      <WaterImg onClick={() => setProgress((prev) => (prev + 1) % 6)}>
        <WaterIcon />
        <WaterLeft>2</WaterLeft>
      </WaterImg>
      <FertilizerImg>비료주머니</FertilizerImg>
      {pos.map((el, key) => (
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
      ))}
    </Wrapper>
  );
};

export default Tree;

const Pictures = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 90px;
  height: 90px;
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
  height: 60vh;
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
`;
