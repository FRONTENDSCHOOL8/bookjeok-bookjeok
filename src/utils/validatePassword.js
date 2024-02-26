const validatePassword = (password) => {
  const passwordReg = /^(?=.*[0-9])(?=.*[!@#$%^&*()])(?!.*\s).{8,}$/;
  if (!password) return false;
  else {
    return passwordReg.test(password);
  }
};
export default validatePassword;
