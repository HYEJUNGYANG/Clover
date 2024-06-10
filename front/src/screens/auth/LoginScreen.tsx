import InputField from '@/components/common/InputField';
import {colors, styleValues} from '@/constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from '@/components/common/CustomButton';

interface LoginScreenProps {}

const deviceHeight = Dimensions.get('screen').height;

function LoginScreen({}: LoginScreenProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('@/assets/app-logo.png')}
        />
      </View>
      {/* 로그인 부분 */}
      <View>
        <View style={styles.loginContainer}>
          <View style={styles.inputContainer}>
            <InputField
              placeholder="이메일"
              blurOnSubmit={false}
              // error="존재하지 않는 이메일 입니다"
            />
            <InputField
              placeholder="비밀번호"
              secureTextEntry
              blurOnSubmit={false}
              error="비밀번호 에러 테스트"
            />
          </View>
          <View style={styles.checkBoxContainer}>
            <BouncyCheckbox
              size={24}
              fillColor={colors.MAIN_GREEN}
              text="자동 로그인"
              textStyle={{
                color: colors.BLACK,
                fontSize: styleValues.H3_FONT_SIZE,
                textDecorationLine: 'none',
              }}
              textContainerStyle={{marginLeft: 14}}
              innerIconStyle={{
                borderRadius: 6,
              }}
              iconStyle={{
                borderRadius: 6,
              }}
              isChecked={isChecked}
              onPress={() => setIsChecked(prev => !prev)}
            />
          </View>
          <CustomButton label="로그인" />
        </View>
        <View style={styles.otherContainer}>
          <Pressable>
            <Text style={styles.otherText}>아이디찾기</Text>
          </Pressable>
          <View style={styles.divider} />
          <Pressable>
            <Text style={styles.otherText}>비밀번호찾기</Text>
          </Pressable>
          <View style={styles.divider} />
          <Pressable>
            <Text style={styles.otherText}>회원가입</Text>
          </Pressable>
        </View>
      </View>
      {/* SNS로그인 부분 */}
      <View style={styles.snsLoginContainer}>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>SNS로 로그인</Text>
          <View style={styles.dividerLine} />
        </View>
        <View style={styles.snsButtonContainer}>
          <Pressable
            style={({pressed}) => [
              styles.snsButton,
              {backgroundColor: colors.KAKAO_COLOR},
              pressed && styles.snsButtonPressed,
            ]}>
            <Image
              style={styles.snsIcon}
              source={require('@/assets/icon/kakao-icon.png')}
            />
          </Pressable>
          <Pressable
            style={({pressed}) => [
              styles.snsButton,
              {backgroundColor: colors.NAVER_COLOR},
              pressed && styles.snsButtonPressed,
            ]}>
            <Image
              style={styles.snsIcon}
              source={require('@/assets/icon/naver-icon.png')}
            />
          </Pressable>
          <Pressable
            style={({pressed}) => [
              styles.snsButton,
              {borderWidth: 1, borderColor: colors.BLACK},
              pressed && styles.snsButtonPressed,
            ]}>
            <Image
              style={styles.snsIcon}
              source={require('@/assets/icon/google-icon.png')}
            />
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
  image: {
    width: '100%',
    height: '100%',
  },
  loginContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  inputContainer: {
    gap: 9,
  },
  checkBoxContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  otherContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 23,
  },
  otherText: {
    color: colors.GRAY_500,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: colors.GRAY_500,
  },
  snsLoginContainer: {
    flex: 0.8,
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  dividerContainer: {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    marginTop: deviceHeight > 815 ? 56 : 35,
  },
  dividerLine: {
    flex: 1,
    borderBottomColor: colors.GRAY_500,
    borderBottomWidth: 1,
  },
  dividerText: {
    color: colors.GRAY_500,
    fontSize: 16,
  },
  snsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 49,
    marginTop: 20,
  },
  snsButton: {
    width: 54,
    height: 54,
    borderRadius: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  snsButtonPressed: {
    opacity: 0.6,
  },
  snsIcon: {
    width: 20,
    height: 20,
  },
});

export default LoginScreen;
