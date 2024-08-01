import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../styles/color.css";

import StoredTree from "../../components/memory-storage/stored-tree";
import TreeInfo from "../../components/memory-storage/stored-treeinfo";
import PostList from "../../components/memory-storage/PostList";

import bigTreeImg from "../../assets/imgs/bigtree.png";
import bigtreeImg2 from "../../assets/imgs/bigtree2.png"; // 예시로 추가된 이미지
import bigtreeImg3 from "../../assets/imgs/bigtree3.png";
import bigtreeImg4 from "../../assets/imgs/bigtree4.png";

import busan from "../../assets/imgs/busan.png";
import postdog from "../../assets/imgs/postdog.png";

const StorageGallery = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const treeData = [
    {
      image: bigtreeImg4,
      num: 4,
      dates: "2024.06.29 ~ 2024.07.27",
      days: 105,
      posts: [
        {
          id: 5,
          title: "집앞 외식",
          date: "2024.04.12",
          people: "엄마, 아빠, 나, 혈육",
          image: "path/to/image5.jpg", // 실제 이미지 경로를 사용하세요
          description: "봄날의 산책",
        },
      ],
    },
    {
      image: bigtreeImg3,
      num: 3,
      dates: "2023.12.23 ~ 2024.06.28",
      days: 105,
      posts: [
        {
          id: 4,
          title: "산책",
          date: "2024.04.12",
          people: "엄마, 아빠",
          image: "path/to/image4.jpg", // 실제 이미지 경로를 사용하세요
          description: "봄날의 산책",
        },
      ],
    },

    {
      image: bigtreeImg2,
      num: 2,
      dates: "2023.05.30 ~ 2023.12.22",
      days: 110,
      posts: [
        {
          id: 3,
          title: "해변 여행",
          date: "2023.06.15 ~ 2023.06.18",
          people: "엄마, 나",
          image: "path/to/image3.jpg", // 실제 이미지 경로를 사용하세요
          description: "해변에서 신나는 시간!",
        },
      ],
    },
    {
      image: bigTreeImg,
      num: 1,
      dates: "2023.01.01 ~ 2023.05.29",
      days: 260,
      posts: [
        {
          id: 2,
          title: "부산 여행",
          date: "2023.02.08 ~ 2023.02.12",
          people: "엄마, 아빠, 나, 혈육",
          image: busan, // 실제 이미지 경로를 사용하세요
          description: "부산 여행에 다녀왔어요!",
        },
        {
          id: 1,
          title: "강아지",
          date: "2023.01.12",
          people: "강아지",
          image: postdog, // 실제 이미지 경로를 사용하세요
          description: "우리 강아지의 귀여운 모습이에요!",
        },
      ],
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === treeData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? treeData.length - 1 : prevIndex - 1
    );
  };

  const currentTree = treeData[currentIndex];

  const handleAddPost = () => {
    // 글쓰기 버튼 클릭 시의 동작 정의
    navigate("/storage-gallery/write");
  };

  return (
    <Wrapper>
      <StoredTree
        image={currentTree.image}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <TreeInfo
        num={currentTree.num}
        dates={currentTree.dates}
        days={currentTree.days}
        postsCount={currentTree.posts.length}
      />
      <PostList posts={currentTree.posts} />

      <WriteButton onClick={handleAddPost}>+</WriteButton>
    </Wrapper>
  );
};

export default StorageGallery;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 56.25vh;
  height: 100%;
  background-color: var(--gray-50);
  position: relative;
`;

const WriteButton = styled.button`
  background-color: var(--red-600);
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  left: calc(50% + 28.125vh - 50px);
  bottom: 55px; /* Footer 위에 위치 */
  z-index: 1000;
`;
