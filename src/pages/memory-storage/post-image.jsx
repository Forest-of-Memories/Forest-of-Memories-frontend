import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PostImage() {
  const navigate = useNavigate();
  const [fileUrls, setFileUrls] = useState([]);
  const [ifFirstClick, setIfFirstClick] = useState(false);
  const onDeleteClick = (e) => {
    setFileUrls(fileUrls.filter((_, key) => e.target.id !== key.toString()));
  };

  const saveFileImage = (fileBlobs) => {
    const urls = Array.from(fileBlobs).map((el) => URL.createObjectURL(el));
    setFileUrls(urls);
  };

  return (
    <Wrapper>
      <Title onClick={() => console.log(ifFirstClick)}>
        사진을 첨부해주세요
      </Title>
      <Input
        onChange={(e) => {
          saveFileImage(e.target.files);
        }}
        id="image-uploader"
        type="file"
        multiple
      />
      <Preview htmlFor="image-uploader">
        {fileUrls?.map((url, key) => (
          <ImageBox key={key}>
            <Image src={url} alt={key.toString()} />
            <button id={key} onClick={onDeleteClick}>
              X
            </button>
          </ImageBox>
        ))}
      </Preview>
      <Next
        onClick={() =>
          navigate("/storage/post/write", {
            state: fileUrls,
          })
        }
      >
        Next
      </Next>
    </Wrapper>
  );
}

const ImageBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  button {
    background-color: var(--pink-main);
    color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 20px;
  }
  &:hover {
    background-color: gainsboro;
  }
`;

const Image = styled.img`
  width: 60%;
  height: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  gap: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  letter-spacing: -1px;
  color: var(--pink-main);
`;

const Input = styled.input`
  /* display: none; */
`;

const Preview = styled.div`
  width: 70%;
  height: 70%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  overflow-y: scroll;
  padding: 10px 10px;
`;

const Next = styled.div`
  background-color: var(--pink-main);
  color: white;
  width: 70%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 10px 0;
`;
