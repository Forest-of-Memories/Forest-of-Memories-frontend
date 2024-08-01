import styled from "styled-components";
import bigTreeImg from "../../assets/imgs/bigtree.png";
import "../../styles/color.css";

const pos = [
  { left: "50%", top: "10%", deg: "30deg" },
  { left: "30%", top: "20%", deg: "45deg" },
  { left: "50%", top: "40%", deg: "-30deg" },
];

const Tree = ({ level, handleClick }) => {
  return (
    <Wrapper>
      <TreeImg src={bigTreeImg} alt="" />
      <WaterImg>물뿌리개</WaterImg>
      <FertilizerImg>비료주머니</FertilizerImg>
      {pos.map((el, key) => (
        <Pictures
          onClick={handleClick}
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
  width: 80px;
  height: 80px;
  background-color: var(--red-600);
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotateZ(${(props) => props.deg});
  cursor: pointer;
  &:hover {
    background-color: var(--gray-200);
  }
`;

const TreeImg = styled.img`
  height: 100%;
`;

const WaterImg = styled.div`
  position: absolute;
  bottom: 10%;
  left: 15%;
  border-radius: 50%;
  background-color: var(--gray-200);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
`;
