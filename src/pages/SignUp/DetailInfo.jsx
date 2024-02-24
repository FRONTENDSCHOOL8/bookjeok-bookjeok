import { Link, Form, useLocation, redirect } from 'react-router-dom';
import { MainButton } from '@/components/Atoms';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/index';
/*
1. 만약 signup/detail로 path를 갖게 된다면 basicInfo가 없을시 basicInfo쪽으로 넘겨야됨
2. 닉네임 중복 확인
3. 휴대폰 중복 확인 
4. 
*/

export default function DetailInfo() {
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState(state);
  const debouncedNickname = useDebounce(userInfo.nickname, 500);
  const debouncedPhone = useDebounce(userInfo.phone, 500);

  const handleNickname = (e) => {
    setUserInfo((prev) => ({ ...prev, nickname: e.target.value }));
  };

  const handlePhone = (e) => {
    setUserInfo((prev) => ({ ...prev, phone: e.target.value }));
  };

  const handleBirth = (e) => {
    console.log(e.target.value);
    setUserInfo((prev) => ({ ...prev, birth: e.target.value }));
  };

  const handleGender = (e) => {
    setUserInfo((prev) => ({ ...prev, gender: e.target.id }));
  };
  if (state) {
    return (
      <>
        <h1>회원가입</h1>
        <h2>상세 정보</h2>
        <Form className="flex flex-col" action="">
          <label htmlFor="nickname">닉네임</label>
          <input type="text" id="nickname" onChange={handleNickname} />
          <label htmlFor="phone">휴대폰</label>
          <input type="text" id="phone" onChange={handlePhone} />
          <label htmlFor="birth">생년월일</label>
          <input
            type="date"
            id="birth"
            value={userInfo.birth}
            onChange={handleBirth}
          />
          <fieldset>
            <label htmlFor="male">남자</label>
            <input
              type="radio"
              name="gender"
              id="male"
              checked={userInfo.gender === 'male'}
              onChange={handleGender}
            />
            <label htmlFor="female">여자</label>
            <input
              type="radio"
              name="gender"
              id="female"
              checked={userInfo.gender === 'female'}
              onChange={handleGender}
            />
          </fieldset>
        </Form>
        <Link to={{}} state={{}}>
          다음
        </Link>
      </>
    );
  } else {
    return redirect('/signup');
  }
}
