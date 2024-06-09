import {colors} from '@/constants';
import {SafeAreaView, Text} from 'react-native';

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
        <SafeAreaView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: colors.BLACK}}>로그인 하러가기 ✨</Text>
        </SafeAreaView>
      )}
    </>
  );
}

export default RootNavigator;
