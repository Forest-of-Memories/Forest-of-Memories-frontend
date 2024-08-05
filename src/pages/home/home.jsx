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
  const [homeData, setHomeData] = useState([]);
  const navigate = useNavigate();
  const user_id = 2;
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.post(`/memory/question/comment`, {
          index: 1,
          nickname: "닉네임",
          id: 3,
          time: "203010231540",
          cmt_txt: "댓글 내용",
        });
        console.dir(res);
        setHomeData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    console.log(homeData);
  }, []);
  return (
    <Wrapper>
      <Header>
        <Date>
          <span className="start">24.01.07</span>
          <span>~</span>
          <span className="today">24.07.30</span>
          <StoreIcon onClick={() => navigate("/store")} />
        </Date>
      </Header>
      <Tree
        setProgress={setProgress}
        setClickedId={setClickedId}
        imgUrlList={imgUrlList}
        level={5}
        handleClick={handleClick}
      />
      <LevelGauge progress={progress} />
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
  justify-content: center;
  align-items: end;
  padding-bottom: 10px;
  width: 100%;
  height: 10%;
  position: relative;
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
    color: var(--gray-600);
    &.today {
      color: var(--green-main);
      font-weight: 700;
    }
  }
  svg {
    position: absolute;
    top: 10%;
    right: 5%;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
    &:active {
      scale: 0.9;
    }
  }
`;
