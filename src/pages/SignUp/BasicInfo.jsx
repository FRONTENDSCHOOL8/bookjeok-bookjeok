import { Outlet } from 'react-router-dom';
import { Link, Form } from 'react-router-dom';
export default function BasicInfo() {
  return (
    <>
      <h1>회원가입</h1>
      <h2>기본 정보</h2>
      <Form className="flex flex-col" action="">
        <label htmlFor="">이메일</label>
        <input type="email" />
        <label htmlFor="">비밀번호</label>
        <input type="password" />
        <label htmlFor="">비밀번호확인</label>
        <input type="password" />
      </Form>
      <Link to="/signup/detail">다음</Link>
      <Outlet></Outlet>
      {/*이게아닌데 ㅜㅜ 흐앙  */}           
    </>
  );
}
