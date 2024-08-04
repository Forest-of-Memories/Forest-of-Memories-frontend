import React, { useEffect, useRef } from "react";
import "./Footer.css";
import styled from "styled-components";
import "../../styles/color.css";
import { ReactComponent as ArchiveIcon } from "../../assets/icons/archive.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list.svg";
import { ReactComponent as MypageIcon } from "../../assets/icons/mypage.svg";
import { ReactComponent as FooterPlusIcon } from "../../assets/icons/footerplus.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const homeRef = useRef();
  const storageRef = useRef();
  const listRef = useRef();
  const myRef = useRef();

  useEffect(() => {
    const pathname = location.pathname.split("/")[1];
    const refs = [homeRef, storageRef, listRef, myRef];
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.borderTop = "2px solid white";
        ref.current.querySelector("span").style.color = "var(--gray-color)";
      }
    });
    if (pathname === "") {
      homeRef.current.style.borderTop = "2px solid var(--green-main)";
      homeRef.current.querySelector("span").style.color = "var(--green-main)";
      homeRef.current.querySelector("svg").style.stroke = "var(--green-main)";
    } else if (pathname === "storage") {
      storageRef.current.style.borderTop = "2px solid var(--green-main)";
      storageRef.current.querySelector("span").style.color =
        "var(--green-main)";
    } else if (pathname === "question") {
      listRef.current.style.borderTop = "2px solid var(--green-main)";
      listRef.current.querySelector("span").style.color = "var(--green-main)";
    } else if (pathname === "mypage") {
      myRef.current.style.borderTop = "2px solid var(--green-main)";
      myRef.current.querySelector("span").style.color = "var(--green-main)";
    }
  }, [location]);

  return (
    <Wrapper>
      <Div id="home" ref={homeRef}>
        <HomeIcon onClick={() => navigate("/")} />
        <span>홈</span>
      </Div>
      <Div id="storage" ref={storageRef}>
        <ArchiveIcon onClick={() => navigate("/storage")} />
        <span>추억 저장소</span>
      </Div>
      <Div className="plus">
        <div onClick={() => navigate("/storage/post/image")}>
          <FooterPlusIcon />
        </div>
      </Div>
      <Div id="question" ref={listRef}>
        <ListIcon onClick={() => navigate("/question/list")} />
        <span>질문 리스트</span>
      </Div>
      <Div id="mypage" ref={myRef}>
        <MypageIcon onClick={() => navigate("/mypage")} />
        <span>마이페이지</span>
      </Div>
    </Wrapper>
  );
};

export default Footer;

const Div = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 100;
  border-top: 2px solid white;
  cursor: pointer;
  svg {
    height: 25px;
  }
  span {
    color: var(--gray-color);
    font-size: 11px;
  }
  &:hover {
    border-top: 2px solid var(--green-main);
  }
  &.plus {
    position: relative;
    &:hover {
      border-top: 2px solid white;
    }
  }
  div {
    top: -25px;
    position: absolute;
    background-color: var(--green-main);
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    font-size: 4.2rem;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    svg {
      scale: 1.9;
    }
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

const Wrapper = styled.div`
  background-color: white;
  height: 10vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 18px 70px 10px;
`;
