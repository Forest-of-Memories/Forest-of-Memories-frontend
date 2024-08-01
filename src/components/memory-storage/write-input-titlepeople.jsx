import React from "react";
import styled from "styled-components";

const TitlePeopleInput = ({ title, setTitle, people, setPeople }) => {
  return (
    <Container>
      <InputTitle
        type="text"
        placeholder=" 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder=" 함께한 가족"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />
    </Container>
  );
};

export default TitlePeopleInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled.input`
  margin: 2px 0;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  font-size: 17px;
`;

const Input = styled.input`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  font-size: 15px;
`;
