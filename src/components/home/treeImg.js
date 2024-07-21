import styled from "styled-components";
import bigTreeImg from "../../assets/imgs/bigtree.png";

const TreeImg = () => {
  return (
    <Wrapper>
      <img src={bigTreeImg} alt="" />
    </Wrapper>
  );
};

export default TreeImg;

const Wrapper = styled.div`
  background-color: red;
`;
