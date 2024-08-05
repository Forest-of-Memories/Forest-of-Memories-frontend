import styled from "styled-components";
import { ReactComponent as TreeIcon } from "../../assets/icons/treegreen.svg";
import { ReactComponent as PencilIcon } from "../../assets/icons/pencilgreen.svg";
import "../../styles/color.css";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <QuestionBox onClick={() => navigate("/question/detail/1")}>
        <TreeIcon />
        <div className="titlebox">
          <Title>오늘의 질문에 대답하고</Title>
          <Desc>나무를 키워보세요</Desc>
        </div>
      </QuestionBox>
      <QuestionBox onClick={() => navigate("/question/create")}>
        <PencilIcon />
        <div className="titlebox">
          <Desc>
            나만의 질문을 <br />
            만들어보세요!
          </Desc>
        </div>
      </QuestionBox>
    </Wrapper>
  );
};

export default Notifications;
const Title = styled.div`
  font-weight: 100;
  font-size: 0.8rem;
  letter-spacing: -1.5px;
  color: var(--gray-800);
  @media (max-height: 700px) {
    font-size: 0.6rem;
    letter-spacing: -1px;
  }
  @media (max-width: 450px) {
    font-size: 0.6rem;
    letter-spacing: -1px;
  }
`;
const Desc = styled.div`
  letter-spacing: -1.5px;
  font-size: 1rem;
  line-height: 1rem;
  color: var(--gray-800);
  @media (max-height: 700px) {
    font-size: 0.8rem;
    letter-spacing: -1px;
  }
`;
const QuestionBox = styled.div`
  background: rgb(255, 246, 242);
  background: linear-gradient(
    120deg,
    rgba(255, 246, 242, 1) 0%,
    rgba(242, 233, 229, 1) 100%
  );
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 46%;
  padding: 15px 1rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-height: 700px) {
    width: 47%;
  }
  svg {
    width: 40px;
    height: 50px;
    margin-right: 20px;
  }
  .titlebox {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  &:hover {
    background-color: var(--gray-200);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media (max-height: 700px) {
    gap: 2%;
  }
`;
