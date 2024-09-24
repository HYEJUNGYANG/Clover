import SignUpLayout from '@/components/auth/SignUpLayout';
import RadioButton from '@/components/common/RadioButton';
import {colors, styleValues} from '@/constants';
import {Area} from '@/types';
import areaOptions from '@/utils/area';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SignUpAreaScreenProps {}

function SignUpAreaScreen({}: SignUpAreaScreenProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <SignUpLayout
      title="활동 지역을 선택해주세요."
      buttonLabel="회원가입하기"
      progressOrder={8}
      buttonAction={() => {}}>
      <View style={styles.areaContainer}>
        <Text style={styles.areaText}>지역은 하나만 선택 가능합니다.</Text>
        <View style={styles.radioContainer}>
          <RadioButton
            options={areaOptions}
            size="medium"
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
          />
        </View>
      </View>
    </SignUpLayout>
  );
}

const styles = StyleSheet.create({
  areaContainer: {
    marginTop: 6,
  },
  areaText: {
    color: colors.INVALID_TEXT,
    fontSize: 12,
    marginBottom: 10,
  },
  radioContainer: {
    marginTop: 10,
  },
});

export default SignUpAreaScreen;
