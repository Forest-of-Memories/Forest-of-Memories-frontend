import styled from "styled-components";
import "../../styles/color.css";

const Home = () => {
  return (
    <Wrapper>
      home
      {/* <TitleBox />
      <ImgsWrapper />
      <LevelBox />
      <NotificationWrapper /> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: #00ff80;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
