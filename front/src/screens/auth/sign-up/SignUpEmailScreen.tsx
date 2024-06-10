import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SignUpNavigation} from './SignUpNameScreen';
import InputField from '@/components/common/InputField';
import {signUpNavigations} from '@/constants';
import SignUpLayout from '@/components/auth/SignUpLayout';

interface SignUpEmailScreenProps {}

function SignUpEmailScreen({}: SignUpEmailScreenProps) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignUpNavigation>();

  return (
    <SignUpLayout
      title="이메일을 입력해주세요."
      progressOrder={1}
      buttonAction={() => navigation.navigate(signUpNavigations.SIGN_UP_NAME)}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일을 입력해주세요."
          blurOnSubmit={false}
          keyboardType="email-address"
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

export default SignUpEmailScreen;
