const validateEmail = (email) => {
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return false;
  else {
    return emailReg.test(email);
  }
};
export default validateEmail;
