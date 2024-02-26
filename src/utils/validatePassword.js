const validatePassword = (password) => {
  const passwordReg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d\s@$!%*#?&]{8,16}$/;
  if (passwordReg.test(password)) return true;
  else {
    return '비밀번호는 8자 이상 영문자, 숫자, 특수문자를 포함해야 합니다.';
  }
};
export default validatePassword;
