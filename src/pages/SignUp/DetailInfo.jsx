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
4. 다음 버튼 클릭시 db 적재  
*/
console.log(pb);

export default function DetailInfo() {
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState(state);
  const [isValidateNickname, setIsValidateNickname] = useState(false);
  const [isValidatePhone, setIsValidatePhone] = useState(false);
  const debouncedNickname = useDebounce(userInfo.nickname, 500);
  const debouncedPhone = useDebounce(userInfo.phone, 500);

  const handleNickname = (e) => {
    setUserInfo((prev) => ({ ...prev, nickname: e.target.value }));
  };

  const handlePhone = (e) => {
    setUserInfo((prev) => ({ ...prev, phone: e.target.value }));
  };

  const handleBirth = (e) => {
    setUserInfo((prev) => ({ ...prev, birth: e.target.value }));
  };

  const handleGender = (e) => {
    setUserInfo((prev) => ({ ...prev, gender: e.target.id }));
  };
  const handleSubmit = (e) => {
    console.log(e);
  };

  useEffect(() => {
    if (state && userInfo.nickname !== '') {
      fetchReadDataAPI('users', 'nickname', debouncedNickname)
        .then((data) => setIsValidateNickname(data.length === 0))
        .catch((error) => console.log(error));
    }
  }, [debouncedNickname]);

  useEffect(() => {
    if (state && userInfo.phone !== '') {
      fetchReadDataAPI('users', 'phone', debouncedPhone)
        .then((data) => {
          console.log(data);
          setIsValidatePhone(data.length === 0);
        })
        .catch((error) => console.log(error));
    }
  }, [debouncedPhone]);
  try {
    return (
      <>
        <h1>회원가입</h1>
        <h2>상세 정보</h2>
        <Form className="flex flex-col" action="">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            maxLength="10"
            onChange={handleNickname}
          />
          {userInfo.nickname == '' || isValidateNickname ? null : (
            <p>중복된 닉네임은 사용할 수 없어용 </p>
          )}
          <label htmlFor="phone">휴대폰</label>
          <input type="text" id="phone" onChange={handlePhone} />
          {userInfo.phone == '' || isValidatePhone ? null : (
            <p>이미 가입된 전화번호입니다! </p>
          )}
          <label htmlFor="birth">생년월일</label>
          <input
            type="date"
            id="birth"
            value={userInfo.birth}
            onChange={handleBirth}
          />
          <fieldset>
            <legend>성별</legend>
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
        <Link to="/welcome" state={{}}>
          <MainButton
            className="large_primary"
            type="button"
            disabled={
              !(
                isValidatePhone &&
                isValidateNickname &&
                userInfo.birth !== '' &&
                userInfo.gender !== ''
              )
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
