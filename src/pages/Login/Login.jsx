import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { TextForm, NomalTitle, MainButton } from '@/components/Atoms';
import { useRef } from 'react';
import pb from '@/api/pocketbase';

/*
1. useRef로 email, password -> useRef 상태관리x 
2. 버튼을 눌렀을때 이메일과 패스워드가 맞는지 확인 => 완료  
3. 어떻게 로그인 성공 / 실패를 알려야될까.. 고민중. . .
  - 시각적 에니메이션 -> 어떻게 스크린리더사용자에게 전달할수 있을까?
  - 성공 알림 모달-> 확인 버튼 클릭시 메인으로 이동 | 실패 모달 ?  
*/

function Login() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const handleLoginForm = (e) => {
    const target = e.target.closest('input');
    if (!target) return;
    if (target) {
      e.target.name === 'email'
        ? (emailRef.current = e.target.value)
        : (passwordRef.current = e.target.value);
    }
  };
  // 로그인 이벤트 함수 (로그인 성공/실패 결과 표시 필요 ! )
  const handleLogin = () => {
    pb.collection('users')
      .authWithPassword(`${emailRef.current}`, `${passwordRef.current}`)
      .then((data) => console.log(data))
      .catch((Error) => console.error(Error));
  };

  return (
    <div className="box-border flex h-screen  flex-grow flex-col justify-center px-4 ">
      <Helmet>
        <title>{getDocumentTitle('로그인')}</title>
      </Helmet>
      <NomalTitle backButton>로그인</NomalTitle>
      <div className="flex flex-grow flex-col " onChange={handleLoginForm}>
        <TextForm type="email" placeholder="email@email.com" name="email">
          이메일
        </TextForm>
        <TextForm type="password" placeholder="" name="password">
          비밀번호
        </TextForm>
      </div>
      <MainButton onClick={handleLogin} className="my-16" type="button">
        로그인
      </MainButton>
    </div>
  );
}

export default Login;
