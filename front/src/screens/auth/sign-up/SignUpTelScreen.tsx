import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SignUpNavigation} from './SignUpNameScreen';
import InputField from '@/components/common/InputField';
import {signUpNavigations} from '@/constants';
import SignUpLayout from '@/components/auth/SignUpLayout';

interface SignUpTelScreenProps {}

function SignUpTelScreen({}: SignUpTelScreenProps) {
  const navigation = useNavigation<SignUpNavigation>();

  return (
    <SignUpLayout
      title="전화번호를 입력해주세요."
      progressOrder={4}
      buttonAction={() =>
        navigation.navigate(signUpNavigations.SIGN_UP_PASSWORD)
      }>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="전화번호를 입력해주세요."
          blurOnSubmit={false}
          keyboardType="numeric"
          maxLength={11}
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

export default SignUpTelScreen;
