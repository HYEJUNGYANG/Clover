import {useEffect} from 'react';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainSearchStackNavigator from '../stack/MainSearchStackNavigator';
import SplashScreen from 'react-native-splash-screen';

function RootNavigator() {
  const isLogin = true; // 마크업 작업을 위한 임시 설정

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  return <>{isLogin ? <MainSearchStackNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
