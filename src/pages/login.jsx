import { instance } from "../api/instance";

export default function Login() {
  const onClick = () => {
    const fetchData = async () => {
      try {
        const res = await instance.get(`/accounts/kakao/login`);
        console.dir(res);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  };
  return (
    <>
      <button onClick={onClick}>로그인</button>
    </>
  );
}
