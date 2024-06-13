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

const mainNavigations = {
  MAIN_HOME: 'MainHome',
  MAIN_RECENT: 'MainRecent',
  MAIN_HOT: 'MainHot',
} as const;

const mainTabNavigations = {
  HOME: 'Home',
  MY_CLUB: 'MyClub',
  CALENDAR: 'Calendar',
  MY_PAGE: 'MyPage',
} as const;

const mainSearchNavigations = {
  MAIN_TAB: 'MainTab',
  SEARCH: 'Search',
} as const;

const myPageNavigations = {
  MYPAGE_HOME: 'MyPageHome',
  PROFILE_EDIT: 'ProfileEdit',
  HEART_LIST: 'HeartList',
  CREATE_CLUB: 'CreateCLub',
} as const;

const calendarNavigations = {
  CALENDAR_HOME: 'CalendarHome',
  SCHEDULE_ADD: 'ScheduleAdd',
} as const;

export {
  authNavigations,
  signUpNavigations,
  mainNavigations,
  mainTabNavigations,
  mainSearchNavigations,
  myPageNavigations,
  calendarNavigations,
};
