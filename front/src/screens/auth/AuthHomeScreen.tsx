import CustomButton from '@/components/common/CustomButton';
import {authNavigations, colors, styleValues} from '@/constants';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  const insets = useSafeAreaInsets(); // hook 종류는 반드시 컴포넌트 안에서 사용해야함!! (주의)

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          insets.top > 0 && styles.imageContainerMargin,
        ]}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('@/assets/app-logo.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonTopContainer}>
          <CustomButton
            label="카카오톡으로 시작하기"
            style={styles.kakaoLoginButton}
            textStyle={{color: colors.BLACK}}
            icon={
              <Image
                style={{width: 18, height: 18}}
                source={require('@/assets/icon/kakao-icon.png')}
              />
            }
          />
          <CustomButton
            label="네이버로 시작하기"
            style={{backgroundColor: colors.NAVER_COLOR}}
            icon={
              <Image
                style={{width: 18, height: 18}}
                source={require('@/assets/icon/naver-icon.png')}
              />
            }
          />
          <CustomButton
            label="구글로 시작하기"
            variant="outlined"
            style={{borderColor: colors.BLACK}}
            textStyle={{color: colors.BLACK}}
            icon={
              <Image
                style={{width: 18, height: 18}}
                source={require('@/assets/icon/google-icon.png')}
              />
            }
          />
        </View>
        <View style={styles.buttonCenterContainer}>
          <View style={styles.line} />
          <Text style={styles.lineText}>또는</Text>
          <View style={styles.line} />
        </View>
        <CustomButton
          label="이메일로 회원가입"
          onPress={() => navigation.navigate(authNavigations.SIGN_UP)}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginAlignContainer}>
          <Text
            style={[
              styles.loginText,
              {color: colors.GRAY_500, fontWeight: '300'},
            ]}>
            이미 계정이 있으신가요?
          </Text>
          <Pressable
            style={({pressed}) => [pressed && {opacity: 0.6}]}
            onPress={() => navigation.navigate(authNavigations.LOGIN)}>
            <Text
              style={[
                styles.loginText,
                {color: colors.MAIN_PINK, fontWeight: '500'},
              ]}>
              로그인 하기
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    width: styleValues.LOGO_SIZE,
    height: styleValues.LOGO_SIZE,
  },
  imageContainerMargin: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  buttonTopContainer: {
    gap: 16,
  },
  buttonCenterContainer: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginVertical: 10,
    paddingHorizontal: 26,
  },
  kakaoLoginButton: {
    backgroundColor: colors.KAKAO_COLOR,
  },
  line: {
    flex: 1,
    borderBottomColor: colors.GRAY_300,
    borderBottomWidth: 1,
  },
  lineText: {
    color: colors.GRAY_300,
    fontSize: 16,
  },
  loginContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginAlignContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  loginText: {
    fontSize: 16,
  },
});

export default AuthHomeScreen;
