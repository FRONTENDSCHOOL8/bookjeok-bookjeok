const validateEmail = (email: string) => {
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (emailReg.test(email)) return true;
  else {
    return false;
  }
};
export default validateEmail;
