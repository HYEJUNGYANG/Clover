import SignUpLayout from '@/components/auth/SignUpLayout';
import CustomButton from '@/components/common/CustomButton';
import InputField from '@/components/common/InputField';
import {
  authNavigations,
  colors,
  signUpNavigations,
  styleValues,
} from '@/constants';
import {SignUpStackParamList} from '@/navigations/stack/SignUpStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButtonProps, RadioGroup} from 'react-native-radio-buttons-group';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

export type SignUpNavigation = StackNavigationProp<SignUpStackParamList>;

interface SignUpNameScreenProps {}

function SignUpNameScreen({}: SignUpNameScreenProps) {
  const navigation = useNavigation<SignUpNavigation>();

  return (
    <SignUpLayout
      title="성명을 입력해주세요."
      progressOrder={2}
      buttonAction={() =>
        navigation.navigate(signUpNavigations.SIGN_UP_GENDER)
      }>
      <View style={styles.inputContainer}>
        <InputField placeholder="성명을 입력해주세요" blurOnSubmit={false} />
      </View>
    </SignUpLayout>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
  },
});

export default SignUpNameScreen;
