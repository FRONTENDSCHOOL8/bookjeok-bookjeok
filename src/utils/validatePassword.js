const validatePassword = (password) => {
  const passwordReg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d\s@$!%*#?&]{8,16}$/;
  if (passwordReg.test(password)) return true;
  else {
    return false;
  }
};
export default validatePassword;
