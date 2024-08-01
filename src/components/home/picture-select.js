import styled from "styled-components";

const PictureSelect = ({
  handleClick,
  setImgUrlList,
  clickedId,
  imgUrlList,
}) => {
  const TestUrls = [
    "https://cafe24.poxo.com/ec01/wbskinramudali/HOvhRhvOk+Cp2KY4JuusAlHhNnmah66F2yGVAu2J1sWfERGpMMgqq+V9hZaChQo+UMQHi7H1JnIpdUOgkLEc5w==/_/web/product/big/202205/5efed93f9ef8712ac155c23c1c43f4a7.jpg",
    "https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG",
    "https://www.fitpetmall.com/wp-content/uploads/2023/10/image-26.png",
    "https://cat-lab.co.kr/data/editor/2203/4fea39b9ee8ab23e62522153035041fc_1646215721_8448.jpg",
    "https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg",
    "https://cdn.popsci.co.kr/news/photo/202205/11966_7101_2744.jpg",
  ].filter((el) => el !== imgUrlList[clickedId]);
  const onImgClick = (e) => {
    const temp = imgUrlList;
    temp[clickedId] = e.target.src;
    setImgUrlList(temp);
    handleClick();
  };
  return (
    <Wrapper>
      <Current>
        <div>현재 사진</div>
        <Img src={imgUrlList[clickedId]} />
      </Current>
      <Gallery>
        {TestUrls.map((el, key) => (
          <Img onClick={onImgClick} key={key} src={el} />
        ))}
      </Gallery>
    </Wrapper>
  );
};

export default PictureSelect;
const Current = styled.div`
  background-color: violet;
`;
const Gallery = styled.div`
  background-color: aquamarine;
`;
const Img = styled.img`
  width: 200px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: red; */
`;
