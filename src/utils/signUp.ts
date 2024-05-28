type INITIAL_VALIDATE_STATE = {
  isNotRegisteredEmail: boolean;
  isValidateEmail: boolean;
  isValidatePassword: boolean;
  isConfirmPassword: boolean;
};
// getDescriptionEmail 함수의 타입
type GetDescriptionEmailType = (
  email: string,
  state: INITIAL_VALIDATE_STATE
) => string | undefined;

export const getDescriptionEmail: GetDescriptionEmailType = (email, state) => {
  if (!email) return;
  if (!state.isValidateEmail) {
    return '이메일 형식이 올바르지 않습니다.';
  } else {
    if (!state.isNotRegisteredEmail) {
      return '이미 사용 중인 이메일 주소 입니다.';
    }
  }
};

// getDescriptionPassword 함수의 타입
type GetDescriptionPasswordType = (
  password: string,
  state: INITIAL_VALIDATE_STATE
) => string | undefined;

export const getDescriptionPassword: GetDescriptionPasswordType = (
  password,
  state
) => {
  if (!password) return;
  if (!state.isValidatePassword) {
    return '비밀번호는 8자 이상 영문, 숫자, 특수문자를 포함해 입력하세요.';
  }
};

// getDescriptionConfirmPassword 함수의 타입
type GetDescriptionConfirmPasswordType = (
  confirmPassword: string | undefined,
  state: INITIAL_VALIDATE_STATE
) => string | undefined;

export const getDescriptionConfirmPassword: GetDescriptionConfirmPasswordType =
  (confirmPassword, state) => {
    if (!confirmPassword || confirmPassword === undefined) return;
    if (!state.isConfirmPassword) {
      return '동일한 비밀번호를 입력해주세요.';
    }
  };

export const phoneNumberFormatter = (value: string) => {
  return value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};
