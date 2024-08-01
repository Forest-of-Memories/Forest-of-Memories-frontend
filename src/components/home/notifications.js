import styled from "styled-components";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as PencilIcon } from "../../assets/icons/pencil.svg";
import "../../styles/color.css";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <QuestionBox onClick={() => navigate("/question/detail/1")}>
        <BellIcon />
        <div className="titlebox">
          <Title>띵동! 오늘의 질문이 도착했어요!</Title>
          <Desc>오늘은 가족의 어떤 새로운 점을 알게 될까요?</Desc>
        </div>
      </QuestionBox>
      <QuestionBox onClick={() => navigate("/question/create")}>
        <PencilIcon />
        <div className="titlebox">
          <Title>나만의 질문을 만들어보세요!</Title>
          <Desc>
            평소에 궁금했던 점을 질문하거나
            <br /> 부끄러워 하지 못했던 깊은 이야기를 나누어보세요!
          </Desc>
        </div>
      </QuestionBox>
    </Wrapper>
  );
};

export default Notifications;
const Title = styled.div`
  font-weight: 800;
  font-size: 20px;
`;
const Desc = styled.div`
  color: white;
  font-size: 12px;
  line-height: 1rem;
`;
const QuestionBox = styled.div`
  background-color: var(--red-600);
  width: 80%;
  padding: 15px 15px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 40px;
    height: 50px;
    margin-right: 20px;
  }
  .titlebox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &:hover {
    background-color: var(--gray-200);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
