import { Link, Form, useLocation, redirect } from 'react-router-dom';
import { MainButton } from '@/components/Atoms';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/index';
import pb from '@/api/pocketbase';
import { fetchReadDataAPI } from '@/utils';
/*
1. 만약 signup/detail로 path를 갖게 된다면 basicInfo가 없을시 basicInfo쪽으로 넘겨야됨
2. 닉네임 중복 확인 , 닉네임 유효성 검사 ? ,,,
3. 휴대폰 중복 확인 , 휴대폰 유효성검사 .,... 
  전화번호 입력시 3-4-4 자리수대로 하이픈 .... 
4. 다음 버튼 클릭시 db 적재  
*/

export default function DetailInfo() {
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState(state);
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState(false);
  const [isValidatePhone, setIsValidatePhone] = useState(false);
  const [isRegisteredPhone, setIsRegisteredPhone] = useState(true);
  const debouncedUserInfo = useDebounce(userInfo, 500);

  const handleUserInfo = (e) => {
    const updatedUserInfo = { ...userInfo, [e.target.name]: e.target.value };
    setUserInfo(updatedUserInfo);
  };

  const handleSubmit = () => {
    pb.collection('users')
      .create(userInfo)
      .then((data) => console.log(data));
  };

  //닉네임 중복 검사
  useEffect(() => {
    if (state && userInfo.nickname !== '') {
      pb.collection('users')
        .getList(1, 1, {
          filter: `nickname = "${debouncedUserInfo.nickname}"`,
        })
        .then((data) => setIsDuplicatedNickname(data.items.length !== 0))
        .catch((Error) => console.error(Error));
    }
  }, [debouncedUserInfo.nickname]);

  // 가입된 휴대전화 검사
  useEffect(() => {
    if (state && userInfo.phone !== '') {
      pb.collection('users')
        .getList(1, 1, {
          filter: `phone = "${debouncedUserInfo.phone}"`,
        })
        .then((data) => setIsRegisteredPhone(data.items.length !== 0))
        .catch((Error) => console.error(Error));
    }
  }, [debouncedUserInfo.phone]);

  try {
    return (
      <>
        <h1>회원가입</h1>
        <h2>상세 정보</h2>
        <Form className="flex flex-col" method="post">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            maxLength="10"
            onChange={handleUserInfo}
          />
          {userInfo.nickname && isDuplicatedNickname ? (
            <p>여여 이미 가입 했다구 ~ </p>
          ) : null}
          <label htmlFor="phone">휴대폰</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={handleUserInfo}
          />
          {userInfo.phone && isRegisteredPhone ? (
            <p>이미 가입된 전화번호입니다! </p>
          ) : null}
          <label htmlFor="birth">생년월일</label>
          <input
            type="date"
            id="birth"
            name="birth"
            value={userInfo.birth}
            onChange={handleUserInfo}
          />
          <fieldset>
            <legend>성별</legend>
            <label htmlFor="male">남자</label>
            <input
              type="radio"
              value="male"
              name="gender"
              checked={userInfo.gender === 'male'}
              onChange={handleUserInfo}
            />
            <label htmlFor="female">여자</label>
            <input
              type="radio"
              value="female"
              name="gender"
              checked={userInfo.gender === 'female'}
              onChange={handleUserInfo}
            />
          </fieldset>
        </Form>
        <Link to="/welcome">
          <MainButton
            type="button"
            disabled={
              isRegisteredPhone ||
              userInfo.birth == '' ||
              userInfo.gender == '' ||
              isDuplicatedNickname
            }
            onClick={handleSubmit}
          >
            다음
          </MainButton>
        </Link>
      </>
    );
  } catch {
    return redirect('/signup');
  }
}
