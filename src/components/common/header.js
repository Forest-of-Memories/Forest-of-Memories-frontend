import styled from "styled-components";
import "../../styles/color.css";

const Header = () => {
  return <Wrapper>header</Wrapper>;
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  background-color: var(--gray-200);
`;
