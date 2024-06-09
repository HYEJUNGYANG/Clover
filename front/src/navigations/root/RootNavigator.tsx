import {colors} from '@/constants';
import {SafeAreaView, Text} from 'react-native';
import AuthStackNavigator from '../stack/AuthStackNavigator';

function RootNavigator() {
  const isLogin = false; // 마크업 작업을 위한 임시 설정

  return (
    <>
      {isLogin ? (
        <SafeAreaView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: colors.BLACK}}>로그인 완료 👋🏻😖</Text>
        </SafeAreaView>
      ) : (
        <AuthStackNavigator />
      )}
    </>
  );
}

export default RootNavigator;
