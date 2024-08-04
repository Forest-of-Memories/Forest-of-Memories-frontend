import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as RightIcon } from "../../assets/icons/right.svg";
import { ReactComponent as LeftIcon } from "../../assets/icons/left.svg";
const PostDetailContent = ({ content }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = content
    .filter((item) => item.type === "image")
    .map((item) => item.value);
  const texts = content.filter((item) => item.type === "text");

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <ContentContainer>
      {images.length > 0 && (
        <ImageContainer>
          {images.length > 1 && (
            <ArrowButton onClick={handlePrevImage} direction="left">
              <LeftIcon />
            </ArrowButton>
          )}
          <ImageWrapper>
            <PostImage
              src={images[currentImageIndex]}
              alt={`Post image ${currentImageIndex}`}
            />
          </ImageWrapper>
          {images.length > 1 && (
            <ArrowButton onClick={handleNextImage} direction="right">
              <RightIcon />
            </ArrowButton>
          )}
        </ImageContainer>
      )}
      {texts.map((item, index) => (
        <Description key={index}>{item.value}</Description>
      ))}
    </ContentContainer>
  );
};

export default PostDetailContent;

const ContentContainer = styled.div`
  /* padding: 6px 20px; */
  letter-spacing: -1.5px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 10px 0; */
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "left" ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  /* background: rgba(0, 0, 0, 0.5); */
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  &:hover {
    /* background: rgba(0, 0, 0, 0.8); */
  }
`;

const PostImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  // width: 100%;
  // height: auto;
  //border-radius: 5px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
  padding: 0 10px;
  letter-spacing: -1.5px;
`;
