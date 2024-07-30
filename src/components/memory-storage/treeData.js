import bigTreeImg from "../../assets/imgs/bigtree.png";
import bigtreeImg2 from "../../assets/imgs/bigtree2.png"; // 예시로 추가된 이미지
import bigtreeImg3 from "../../assets/imgs/bigtree3.png";
import bigtreeImg4 from "../../assets/imgs/bigtree4.png";

import busan from "../../assets/imgs/busan.png";
import postdog from "../../assets/imgs/postdog.png";

const treeData = [
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
        writer: "엄마",
        image: "path/to/image4.jpg",
        description: "봄날의 산책",
        content: [
          { type: "text", value: "봄날의 산책" },
          { type: "image", value: "path/to/image4.jpg" },
          { type: "text", value: "즐거운 시간을 보냈어요." },
        ],
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
        writer: "나",
        image: "path/to/image3.jpg",
        description: "해변에서 신나는 시간!",
        content: [
          { type: "text", value: "해변에서 신나는 시간!" },
          { type: "image", value: "path/to/image3.jpg" },
        ],
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
        writer: "혈육",
        image: busan,
        description: "부산 여행에 다녀왔어요!",
        content: [
          { type: "text", value: "부산 여행에 다녀왔어요!" },
          { type: "image", value: busan },
          {
            type: "text",
            value:
              "헤더가 같이 스크롤 되는군요. 추후에 고쳐야겠어요. 가나다라바사다아자카차마니아리ㅏㅓ안녀안ㅇ나ㅣㅇ러ㅣㅁ낭러ㅣㅏㄴ어ㅁㄴㅇㄻㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴ이다빈.엔터를 치고 싶어요.안되는군요.ㅁ니아ㅓㄹ민아ㅓㄹ;ㅣ나얼;ㅣㅁ나얼;ㅣ마넝ㄹ;ㅣ마넝리;.ㅣㅏㄴ어리ㅏ너이라ㅓㅣㄴ아러ㅣㄴ어ㅣㄴ라ㅓ.ㅏㅓㄴ이라ㅓ니아러ㅣ낭러ㅣㅁ낭러ㅣㅁ나얼;ㅣㅁ나어린ㅇ.ㅣㅓㅣㄴ아ㅓㄻ;ㅣ나얼;ㅣㅁ나얼;ㅣㅁ나얼;ㅣㅁ낭.ㅣㅏㅓㄴ;이라ㅓㄴ;ㅣ하ㅓ;ㅣ허.",
          },
        ],
      },
      {
        id: 1,
        title: "강아지",
        date: "2023.01.12",
        people: "강아지",
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
        date: "2023.03.01",
        people: "나",
        writer: "나",
        image: "path/to/newimage.jpg",
        description: "미리보기 내용.",
        content: [
          { type: "text", value: "새로운 게시글의 내용입니다." },
          { type: "image", value: "path/to/newimage.jpg" },
        ],
      },
    ],
  },
];

export default treeData;
