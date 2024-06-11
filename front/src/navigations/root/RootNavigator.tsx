import {colors} from '@/constants';
import {SafeAreaView, Text} from 'react-native';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainStackNavigator from '../stack/MainStackNavigator';
import MainTabNavigator from '../tab/MainTabNavigator';

function RootNavigator() {
  const isLogin = true; // 마크업 작업을 위한 임시 설정

  return <>{isLogin ? <MainTabNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
