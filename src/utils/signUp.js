export const getDescriptionEmail = (email, state) => {
  if (!email) return;
  if (!state.isValidateEmail) {
    return '이메일 형식이 올바르지 않습니다.';
  }
  if (!state.isNotRegisteredEmail) {
    return '이미 사용 중인 이메일 주소 입니다.';
  }
};
export const getDescriptionPassword = (password, state) => {
  if (!password) return;
  if (!state.isValidatePassword) {
    return '비밀번호는 8자 이상 영문, 숫자, 특수문자를 포함해 작성해주세요';
  }
};

export const getDescriptionConfirmPassword = (confirmPassword, state) => {
  if (!confirmPassword || confirmPassword == undefined) return;
  if (!state.isConfirmPassword) {
    return '동일한 비밀번호를 입력해주세요.';
  }
};
