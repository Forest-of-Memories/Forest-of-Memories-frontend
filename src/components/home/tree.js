import styled from "styled-components";
import bigTreeImg from "../../assets/imgs/bigtree.png";

const Tree = () => {
  return (
    <Wrapper>
      <TreeImg src={bigTreeImg} alt="" />
      <WaterImg>물뿌리개</WaterImg>
      <FertilizerImg>비료주머니</FertilizerImg>
    </Wrapper>
  );
};

export default Tree;

const TreeImg = styled.img`
  height: 100%;
  background-color: pink;
`;
const WaterImg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
const FertilizerImg = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
`;
