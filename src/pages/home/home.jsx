import styled from "styled-components";
import "../../styles/color.css";
import Tree from "../../components/home/tree";
import LevelGauge from "../../components/home/level-gauge";
import Notifications from "../../components/home/notifications";
import PictureSelect from "../../components/home/picture-select";
import { useEffect, useState } from "react";
import { instance } from "../../api/instance";
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

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(`/memory/shop-items`);
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
      <DurationBox>
        <div className="date">2024.07.17</div>
        <div className="desc">부터 키우고 있어요</div>
      </DurationBox>
      <Title>
        <div>매일 질문에 대한 답을 남기며</div>
        <div>
          <span>우리 가족만의 나무</span>를 키워보아요!
        </div>
      </Title>
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
  /* background-color: #ffffff; */
  height: 100%;
  display: grid;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    font-weight: 800;
    font-size: 1.3rem;
    line-height: 1.8rem;
    span {
      color: var(--red-600);
    }
  }
`;

const DurationBox = styled.div`
  display: flex;
  justify-content: center;
  color: var(--red-600);
  align-items: end;
  .date {
    font-size: 32px;
    font-weight: 800;
  }
  .desc {
    font-weight: 700;
  }
`;
