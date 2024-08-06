import christmasTreeImage from "../../assets/imgs/christmas-tree.png";
import cherryBlossom from "../../assets/imgs/cherryBlossom.png";
import autumnTree from "../../assets/imgs/autumnTree.png";
import defaultTree from "../../assets/imgs/bigtree.png";

import snowImage from "../../assets/imgs/snow-bg.png";
import beachImage from "../../assets/imgs/beach-bg.png";
import sunsetImage from "../../assets/imgs/sunset-bg.png";

import candycane from "../../assets/imgs/3d-fluency-candy-cane.png";
import cat from "../../assets/imgs/3d-fluency-cat.png";
import clover from "../../assets/imgs/3d-fluency-clover.png";
import corgi from "../../assets/imgs/3d-fluency-corgi.png";
import crown from "../../assets/imgs/3d-fluency-crown.png";
import desertPlant from "../../assets/imgs/3d-fluency-desert-plant.png";
import gift from "../../assets/imgs/3d-fluency-gift.png";
import heartBalloon from "../../assets/imgs/3d-fluency-heart-balloon.png";
import orange from "../../assets/imgs/3d-fluency-orange.png";
import balloons from "../../assets/imgs/3d-fluency-party-balloons.png";
import santasHat from "../../assets/imgs/3d-fluency-santas-hat.png";
import teddyBear from "../../assets/imgs/3d-fluency-teddy-bear.png";
import tomato from "../../assets/imgs/3d-fluency-tomato.png";
import blueFlower from "../../assets/imgs/3d-fluency-blue-flower.png";
import chicken from "../../assets/imgs/3d-fluency-chicken.png";
import elephant from "../../assets/imgs/3d-fluency-elephant.png";
import flower from "../../assets/imgs/3d-fluency-flower-1.png";
import pig from "../../assets/imgs/3d-fluency-pig.png";
import flowerPink from "../../assets/imgs/3d-fluency-pink-flower.png";
import heart from "../../assets/imgs/3d-fluency-red-heart.png";
import rose from "../../assets/imgs/3d-fluency-rose.png";
import star from "../../assets/imgs/3d-fluency-star.png";
import flowerYellow from "../../assets/imgs/3d-fluency-yellow-flower.png";
import { useState } from "react";

export const treeSets = [
  { name: "기본나무", price: "0", image: defaultTree },
  { name: "벚꽃나무", price: "200", image: cherryBlossom },
  { name: "가을나무", price: "150", image: autumnTree },
  { name: "크리스마스 나무", price: "100", image: christmasTreeImage },
];

export const backgroundSets = [
  { name: "기본", price: "0", image: snowImage },
  { name: "눈", price: "100", image: snowImage },
  { name: "해변", price: "300", image: beachImage },
  { name: "노을", price: "150", image: sunsetImage },
];

export const objectSets = [
  { name: "웰시코기", price: "100", image: corgi },
  { name: "고양이", price: "100", image: cat },
  { name: "돼지", price: "100", image: pig },
  { name: "코끼리", price: "100", image: elephant },
  { name: "닭", price: "100", image: chicken },
  { name: "테디베어", price: "100", image: teddyBear },

  { name: "왕관", price: "100", image: crown },
  { name: "선인장", price: "100", image: desertPlant },
  { name: "장미", price: "100", image: rose },

  { name: "하트풍선", price: "100", image: heartBalloon },
  { name: "풍선들", price: "100", image: balloons },

  { name: "산타모자", price: "100", image: santasHat },
  { name: "선물상자", price: "50", image: gift },
  { name: "지팡이사탕", price: "100", image: candycane },

  { name: "오렌지", price: "100", image: orange },
  { name: "토마토", price: "100", image: tomato },

  { name: "네잎클로버", price: "100", image: clover },
  { name: "꽃", price: "100", image: flower },
  { name: "파란 꽃", price: "100", image: blueFlower },
  { name: "분홍 꽃", price: "100", image: flowerPink },
  { name: "노란 꽃", price: "100", image: flowerYellow },

  { name: "하트", price: "100", image: heart },
  { name: "별", price: "100", image: star },
];
