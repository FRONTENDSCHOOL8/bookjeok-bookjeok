import { useNavigate, Form, useLocation } from 'react-router-dom';
import {
  MainButton,
  NomalTitle,
  TextForm,
  RadioForm,
} from '@/components/Atoms';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/index';
import pb from '@/api/pocketbase';
/*
1. 만약 signup/detail로 path를 갖게 된다면 basicInfo가 없을시 basicInfo쪽으로 넘겨야됨
2. 닉네임 중복 확인 , 닉네임 유효성 검사 ? ,,,
3. 휴대폰 중복 확인 , 휴대폰 유효성검사 .,... 
  전화번호 입력시 3-4-4 자리수대로 하이픈 .... 
4. 다음 버튼 클릭시 db 적재  

*/

export default function DetailInfo() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(state);
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState(false);
  const [isRegisteredPhone, setIsRegisteredPhone] = useState(true);
  const debouncedUserInfo = useDebounce(userInfo, 500);

  const handleUserInfo = (e) => {
    const updatedUserInfo = { ...userInfo, [e.target.name]: e.target.value };
    setUserInfo(updatedUserInfo);
  };

  // db 적재 !
  const handleSubmit = () => {
    pb.collection('users')
      .create(userInfo)
      .then(() => {
        navigate('/welcome');
      })
      .catch((Error) => console.error(Error));
  };

  //닉네임 중복 검사
  useEffect(() => {
    if (state && debouncedUserInfo.nickname !== '') {
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
    if (state && debouncedUserInfo.phone !== '') {
      pb.collection('users')
        .getList(1, 1, {
          filter: `phone = "${debouncedUserInfo.phone}"`,
        })
        .then((data) => setIsRegisteredPhone(data.items.length !== 0))
        .catch((Error) => console.error(Error));
    }
  }, [debouncedUserInfo.phone]);

  //기본 정보 미기입 후 주소창 /signup/detail 페이지로 이동시 강제로 기본정보 입력 페이지로 이동
  useEffect(() => {
    if (!state) {
      return navigate('/signup');
    }
  }, [state]);

  if (state) {
    return (
      <div className="flex flex-col">
        <NomalTitle backButton subText="2 of 2">
          회원가입
        </NomalTitle>
        <h2 className="h-[64px] text-h-2-semibold">상세 정보</h2>
        <Form className="flex flex-grow flex-col" method="post">
          <TextForm
            type="text"
            id="nickname"
            name="nickname"
            maxLength={10}
            onChange={handleUserInfo}
            description={
              userInfo.nickname && isDuplicatedNickname
                ? '이미 사용 중인 닉네임 입니다. '
                : ''
            }
          >
            닉네임
          </TextForm>
          <TextForm
            type="text"
            id="phone"
            name="phone"
            maxLength={11}
            onChange={handleUserInfo}
            description={
              userInfo.phone && isRegisteredPhone
                ? '이미 가입된 전화번호입니다!'
                : ''
            }
          >
            휴대폰
          </TextForm>

          <TextForm
            type="date"
            id="birth"
            name="birth"
            value={userInfo.birth}
            onChange={handleUserInfo}
          >
            생년월일
          </TextForm>

          <div className="flex h-[64px] flex-row items-center gap-4 rounded-5xl border-[1px] border-bjgray-100 bg-bjgray-100 px-4 focus-within:border-bjgray-500">
            <fieldset className="flex flex-grow flex-col">
              <legend className="text-b-2-regular text-bjgray-500">성별</legend>
              <div className="inline-flex justify-evenly gap-4">
                <RadioForm
                  type="radio"
                  value="male"
                  name="gender"
                  checked={userInfo.gender === 'male'}
                  onChange={handleUserInfo}
                >
                  남자
                </RadioForm>
                <RadioForm
                  type="radio"
                  value="female"
                  name="gender"
                  checked={userInfo.gender === 'female'}
                  onChange={handleUserInfo}
                >
                  여자
                </RadioForm>
              </div>
            </fieldset>
          </div>
        </Form>

        <MainButton
          as="button"
          disabled={
            !(
              !isRegisteredPhone &&
              userInfo.birth !== '' &&
              userInfo.gender !== '' &&
              !isDuplicatedNickname
            )
          }
          onClick={handleSubmit}
        >
          다음
        </MainButton>
      </div>
    );
  }
}
