import { Link, Form } from 'react-router-dom';

export default function DetailInfo() {
  return (
    <>
      <h1>회원가입</h1>
      <h2>상세 정보</h2>
      <Form className="flex flex-col" action="">
        <label htmlFor="">닉네임</label>
        <input type="text" />
        <label htmlFor="">휴대폰</label>
        <input type="text " />
        <label htmlFor="">생년월일</label>
        <input type="date" />
        <div>
          <label htmlFor="male">남자</label>
          <input type="radio" name="gender" id="male" />
          <label htmlFor="female">여자</label>
          <input type="radio" name="gender" id="female" />
        </div>
      </Form>
      <Link to={{}} state={{}}>
        다음
      </Link>
    </>
  );
}
