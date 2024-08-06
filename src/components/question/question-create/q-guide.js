import styled from "styled-components";
const guideList = [
  "내가 가장 성장했다고 느낀 순간은 언제였어?",
  "나에게 가장 속상할 때는 언제였어?",
  "엄마, 아빠가 바라는 나의 미래 모습은 어떤 모습이야?",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.4",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.5",
  "인생의 가장 큰 행복이 무엇이라고 생각하나요?",
  "부모님이 자라면서 꿈꾸었던 인생과 지금의 인생은 어떻게 다른가요?",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.8",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.9",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.10",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.11",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.12",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.13",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.14",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.15",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.16",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.17",
  "이건 질문 가이드 입니다. 이건 질문리스트 입니다. 클릭해서 복사해 보세요.18",
];

const QGuide = ({ handleClick, setQuestion }) => {
  return (
    <Wrapper>
      {guideList.map((el, key) => (
        <ListBox
          onClick={() => {
            setQuestion(el);
            handleClick();
          }}
          key={key}
        >
          <span className="key">#{key + 1}</span>
          <span>{el}</span>
        </ListBox>
      ))}
    </Wrapper>
  );
};

export default QGuide;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;
`;

const ListBox = styled.div`
  padding: 10px 10px;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  .key {
    color: var(--pink-main);
    font-size: 20px;
    font-weight: 800;
    margin-right: 10px;
  }
  &:hover {
    background-color: var(--gray-800);
    color: white;
  }
`;
