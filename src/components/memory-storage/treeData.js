import bigTreeImg from "../../assets/imgs/tree-basic-four.png";
import bigtreeImg2 from "../../assets/imgs/tree-spring-four.png"; // 예시로 추가된 이미지
import bigtreeImg3 from "../../assets/imgs/tree-christmas-four.png";

import busan from "../../assets/imgs/busan.png";
import postdog from "../../assets/imgs/postdog.png";
import postfamily from "../../assets/imgs/postfamily.png";
import building from "../../assets/imgs/building.png";
import beach from "../../assets/imgs/beach.jpg";
import walk from "../../assets/imgs/walk.jpg";

const treeData = [
  {
    image: bigtreeImg3,
    num: 3,
    dates: "23.12.23 ~ 24.06.28",
    days: 105,
    posts: [
      {
        id: 4,
        title: "산책",
        date: "24.04.12",
        people: ["엄마", "아빠"],
        writer: "엄마",
        image: walk,
        description: "봄날의 산책",
        content: [
          { type: "text", value: "봄날의 산책" },
          { type: "image", value: walk },
          { type: "text", value: "즐거운 시간을 보냈어요." },
        ],
      },
    ],
  },
  {
    image: bigtreeImg2,
    num: 2,
    dates: "23.05.30 ~ 23.12.22",
    days: 110,
    posts: [
      {
        id: 3,
        title: "해변 여행",
        date: "23.06.15 ~ 23.06.18",
        people: ["엄마", "나"],
        writer: "나",
        image: beach,
        description: "해변에서 신나는 시간!",
        content: [
          { type: "text", value: "해변에서 신나는 시간!" },
          { type: "image", value: beach },
        ],
      },
    ],
  },
  {
    image: bigTreeImg,
    num: 1,
    dates: "23.01.01 ~ 23.05.29",
    days: 260,
    posts: [
      {
        id: 2,
        title: "부산 여행",
        date: "23.02.08 ~ 23.02.12",
        people: ["엄마", "아빠", "나", "혈육"],
        writer: "혈육",
        image: busan,
        description: "부산 여행에 다녀왔어요!",
        content: [
          { type: "image", value: building },
          { type: "image", value: busan },
          { type: "image", value: postdog },
          { type: "image", value: postfamily },
          {
            type: "text",
            value:
              "즐거운 여행이었다.ㅎㅎ즐거운 여행이었다.ㅎㅎ즐거운 여행이었다.ㅎㅎ즐거운 여행이었다.ㅎㅎ",
          },
        ],
      },
      {
        id: 1,
        title: "강아지",
        date: "23.01.12",
        people: ["강아지"],
        writer: "아빠",
        image: postdog,
        description: "우리 강아지의 귀여운 모습이에요!",
        content: [
          { type: "text", value: "우리 강아지의 귀여운 모습이에요!" },
          { type: "image", value: postdog },
        ],
      },
      {
        id: 5,
        title: "새로운 게시글",
        date: "23.03.01",
        people: ["나"],
        writer: "나",
        image: postfamily,
        description: "미리보기 내용.",
        content: [
          { type: "text", value: "새로운 게시글의 내용입니다." },
          { type: "image", value: postfamily },
        ],
      },
    ],
  },
];

export default treeData;
