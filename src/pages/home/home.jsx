import styled from "styled-components";
import "../../styles/color.css";
import Tree from "../../components/home/tree";
import LevelGauge from "../../components/home/level-gauge";
import Notifications from "../../components/home/notifications";
import PictureSelect from "../../components/home/picture-select";
import { useEffect, useState } from "react";
import { instance } from "../../api/instance";
import { ReactComponent as StoreIcon } from "../../assets/icons/shopimage.svg";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const imgUrls = [
  "https://cafe24.poxo.com/ec01/wbskinramudali/HOvhRhvOk+Cp2KY4JuusAlHhNnmah66F2yGVAu2J1sWfERGpMMgqq+V9hZaChQo+UMQHi7H1JnIpdUOgkLEc5w==/_/web/product/big/202205/5efed93f9ef8712ac155c23c1c43f4a7.jpg",
  "https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG",
  "https://www.fitpetmall.com/wp-content/uploads/2023/10/image-26.png",
];
const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [clickedId, setClickedId] = useState();
  const [imgUrlList, setImgUrlList] = useState(imgUrls);
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [skin, setSkin] = useState("fall");
  const [homeData, setHomeData] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  const familyID = 1;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(`/memory/memories/`);
        setHomeData(res.data.filter((el) => el.family === familyID));
      } catch (e) {
        console.error(e);
      } finally {
        setSkin(homeData[0]?.tree_skin);
      }
    };
    fetchData();
  }, [skin]);

  return (
    <Wrapper>
      <Header>
        <ThemeContainer>
          <img onClick={() => setSkin("basic")} src="/imgs/theme-basic.png" />
          <img onClick={() => setSkin("spring")} src="/imgs/theme-spring.png" />
          <img onClick={() => setSkin("fall")} src="/imgs/theme-fall.png" />
          <img
            onClick={() => setSkin("christmas")}
            src="/imgs/theme-christmas.png"
          />
          <img onClick={() => setSkin("winter")} src="/imgs/theme-winter.png" />
        </ThemeContainer>
        <Date>
          <span className="start">
            {homeData[0]?.tree_start_dt
              .split("")
              .slice(2)
              .map((el) => {
                if (el === "-") return ".";
                else return el;
              })}
          </span>
          <span>~</span>
          <span className="today">{dayjs().format("YY.MM.DD")}</span>
          <StoreIcon onClick={() => navigate("/store")} />
        </Date>
      </Header>
      <Tree
        progress={progress}
        skin={skin}
        setProgress={setProgress}
        setClickedId={setClickedId}
        imgUrlList={imgUrlList}
        level={level}
        handleClick={handleClick}
      />
      <LevelGauge level={level} setLevel={setLevel} progress={progress} />
      <Notifications />
      {isClicked ? (
        <PopUpWrapper>
          <button onClick={handleClick}>닫기</button>
          <PictureSelect
            setImgUrlList={setImgUrlList}
            clickedId={clickedId}
            imgUrlList={imgUrlList}
            handleClick={handleClick}
          />
        </PopUpWrapper>
      ) : null}
    </Wrapper>
  );
};

export default Home;
const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  img {
    width: 5%;
    cursor: pointer;
    &:hover {
      filter: brightness(0.92);
    }
    &:active {
      scale: 0.9;
    }
  }
`;
const PopUpWrapper = styled.div`
  @keyframes Position {
    from {
      bottom: -90%;
    }
    to {
      bottom: -10%;
    }
  }
  position: absolute;
  bottom: -8vh;
  width: 100%;
  height: 90%;
  background-color: var(--gray-200);
  border-radius: 30px 30px 0 0;
  box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px;
  animation: ease-out 0.3s Position;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 10px;
  width: 100%;
  height: 10%;
  position: relative;
  gap: 5%;
`;
const Date = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 5px 1rem;
  width: 40%;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  letter-spacing: -1.5px;
  span {
    letter-spacing: -2px;
    font-weight: 100;
    color: var(--gray-400);
    &.today {
      color: var(--green-main);
      font-weight: 100;
    }
  }
  svg {
    position: absolute;
    top: 10%;
    right: 5%;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
    &:active {
      scale: 0.9;
    }
  }
`;
