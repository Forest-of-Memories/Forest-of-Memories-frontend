import christmasTreeImage from "../../assets/imgs/christmas-tree.png";
import cherryblossomTreeImage from "../../assets/imgs/cherryblossom-tree.png";
import palmTreeImage from "../../assets/imgs/palm-tree.png";
import mapleTreeImage from "../../assets/imgs/maple-tree.png";
import baobopTreeImage from "../../assets/imgs/baobop-tree.png";
import snowImage from "../../assets/imgs/snow-bg.png";
import beachImage from "../../assets/imgs/beach-bg.png";
import sunsetImage from "../../assets/imgs/sunset-bg.png";
import giftboxImage from "../../assets/imgs/giftbox-oj.png";
import lampImage from "../../assets/imgs/lamp-oj.png";
import dogImage from "../../assets/imgs/dog-oj.png";
import fountainImage from "../../assets/imgs/fountain-oj.png";

export const treeSets = [
  { name: "크리스마스 나무", price: "100", image: christmasTreeImage },
  { name: "벚꽃나무", price: "200", image: cherryblossomTreeImage },
  { name: "야자수", price: "300", image: palmTreeImage },
  { name: "단풍나무", price: "150", image: mapleTreeImage },
  { name: "바오밥나무", price: "250", image: baobopTreeImage },
];

export const backgroundSets = [
  { name: "눈", price: "100", image: snowImage },
  { name: "해변", price: "300", image: beachImage },
  { name: "노을", price: "150", image: sunsetImage },
];

export const objectSets = [
  { name: "선물상자", price: "50", image: giftboxImage },
  { name: "조명", price: "50", image: lampImage },
  { name: "강아지", price: "100", image: dogImage },
  { name: "분수", price: "200", image: fountainImage },
];
