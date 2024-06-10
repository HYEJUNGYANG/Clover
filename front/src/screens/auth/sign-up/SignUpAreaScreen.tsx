import SignUpLayout from '@/components/auth/SignUpLayout';
import RadioButton from '@/components/common/RadioButton';
import {colors, styleValues} from '@/constants';
import {Area} from '@/types';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SignUpAreaScreenProps {}

function SignUpAreaScreen({}: SignUpAreaScreenProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  //   const options = [
  //     {
  //       label: '남',
  //       value: 'male',
  //     },
  //     {label: '여', value: 'female'},
  //   ];
  const options = [
    {label: '서울', value: 'seoul'},
    {label: '경기', value: 'gyeonggi'},
    {label: '인천', value: 'incheon'},
    {label: '강원', value: 'gangwon'},
    {label: '충북', value: 'chungbuk'},
    {label: '충남', value: 'chungnam'},
    {label: '세종', value: 'sejong'},
    {label: '대전', value: 'daejeon'},
    {label: '광주', value: 'gwangju'},
    {label: '전북', value: 'jeonbuk'},
    {label: '전남', value: 'jeonnam'},
    {label: '경북', value: 'gyeongbuk'},
    {label: '경남', value: 'gyeongnam'},
    {label: '대구', value: 'daegu'},
    {label: '울산', value: 'ulsan'},
    {label: '부산', value: 'busan'},
    {label: '제주', value: 'jeju'},
  ];

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
            options={options}
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
