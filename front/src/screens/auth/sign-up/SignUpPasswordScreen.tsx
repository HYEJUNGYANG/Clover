import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignUpNavigation} from './SignUpNameScreen';
import InputField from '@/components/common/InputField';
import {colors, signUpNavigations, styleValues} from '@/constants';
import ShowPasswordIcon from '@/components/common/ShowPasswordIcon';
import SignUpLayout from '@/components/auth/SignUpLayout';

interface SignUpPasswordScreenProps {}

function SignUpPasswordScreen({}: SignUpPasswordScreenProps) {
  const navigation = useNavigation<SignUpNavigation>();
  const [isShows, setIsShows] = useState({
    pw: false,
    pwCheck: false,
  });

  return (
    <SignUpLayout
      title="비밀번호를 입력해주세요."
      progressOrder={5}
      buttonAction={() => navigation.navigate(signUpNavigations.SIGN_UP_BIRTH)}>
      <Text style={styles.description}>
        소문자, 숫자, 특수문자가 한 글자 이상 포함, 8자 이상 작성해주세요.
      </Text>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="비밀번호를 입력해주세요."
          blurOnSubmit={false}
          secureTextEntry={!isShows.pw}
          error="비밀번호 에러 발생 테스트"
          icon={
            <ShowPasswordIcon
              isShow={isShows.pw}
              setIsShow={() => setIsShows(prev => ({...prev, pw: !prev.pw}))}
            />
          }
        />
        <InputField
          placeholder="비밀번호를 한번 더 입력해주세요."
          blurOnSubmit={false}
          secureTextEntry={!isShows.pwCheck}
          error="비밀번호 확인 에러 발생 테스트"
          icon={
            <ShowPasswordIcon
              isShow={isShows.pwCheck}
              setIsShow={() =>
                setIsShows(prev => ({...prev, pwCheck: !prev.pwCheck}))
              }
            />
          }
        />
      </View>
    </SignUpLayout>
  );
}

const styles = StyleSheet.create({
  description: {
    color: colors.INVALID_TEXT,
    fontSize: styleValues.H4_FONT_SIZE,
  },
  inputContainer: {
    marginTop: 20,
    gap: 9,
  },
});

export default SignUpPasswordScreen;
