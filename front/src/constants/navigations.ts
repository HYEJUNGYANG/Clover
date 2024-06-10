const authNavigations = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'LOGIN',
  SIGN_UP: 'SignUp',
} as const;

const signUpNavigations = {
  SIGN_UP_EMAIL: 'SignUpEmail',
  SIGN_UP_NAME: 'SignUpName',
  SIGN_UP_GENDER: 'SignUpGender',
  SIGN_UP_TEL: 'SignUpTel',
  SIGN_UP_PASSWORD: 'SignUpPassword',
  SIGN_UP_BIRTH: 'SignUpBirth',
  SIGN_UP_PROFILE: 'SignUpProfile',
  SIGN_UP_AREA: 'SignUpArea',
} as const;

export {authNavigations, signUpNavigations};
