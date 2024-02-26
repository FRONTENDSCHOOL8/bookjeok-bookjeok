const validateEmail = (email) => {
  const emailReg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailReg.test(email)) return true;
  else {
    return '올바른 이메일 형식이 아닙니다. ';
  }
};
export default validateEmail;
