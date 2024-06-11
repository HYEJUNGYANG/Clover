import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainSearchStackNavigator from '../stack/MainSearchStackNavigator';

function RootNavigator() {
  const isLogin = true; // 마크업 작업을 위한 임시 설정

  return <>{isLogin ? <MainSearchStackNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
