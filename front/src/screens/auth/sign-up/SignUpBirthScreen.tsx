import SignUpLayout from '@/components/auth/SignUpLayout';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SignUpNavigation} from './SignUpNameScreen';
import {signUpNavigations} from '@/constants';
import InputField from '@/components/common/InputField';

interface SignUpBirthScreenProps {}

function SignUpBirthScreen({}: SignUpBirthScreenProps) {
  const navigation = useNavigation<SignUpNavigation>();

  return (
    <SignUpLayout
      title="생년월일을 등록해주세요."
      progressOrder={6}
      buttonAction={() =>
        navigation.navigate(signUpNavigations.SIGN_UP_PROFILE)
      }>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="생년월일 6자리를 입력해주세요."
          keyboardType="numeric"
          maxLength={6}
        />
      </View>
    </SignUpLayout>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
  },
});

export default SignUpBirthScreen;
