import {signUpNavigations} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SignUpNavigation} from './SignUpNameScreen';
import RadioButton from '@/components/common/RadioButton';
import SignUpLayout from '@/components/auth/SignUpLayout';

interface SignUpGenderScreenProps {}

function SignUpGenderScreen({}: SignUpGenderScreenProps) {
  const navigation = useNavigation<SignUpNavigation>();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      label: '남',
      value: 'male',
    },
    {label: '여', value: 'female'},
  ];

  return (
    <SignUpLayout
      title="본인의 성별을 클릭해주세요."
      progressOrder={3}
      buttonAction={() => navigation.navigate(signUpNavigations.SIGN_UP_TEL)}>
      <View style={styles.inputContainer}>
        <RadioButton
          options={options}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
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

export default SignUpGenderScreen;
