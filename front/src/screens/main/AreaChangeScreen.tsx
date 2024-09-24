import CustomButton from '@/components/common/CustomButton';
import RadioButton from '@/components/common/RadioButton';
import {colors, styleValues} from '@/constants';
import areaOptions from '@/utils/area';
import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface AreaChangeScreenProps {}

function AreaChangeScreen({}: AreaChangeScreenProps) {
  const insets = useSafeAreaInsets();
  const [selectedOption, setSelectedOption] = useState<string | null>('busan');

  const onPressModifyButton = () => {
    const option = areaOptions.find(area => area.value === selectedOption);
    Alert.alert(
      '지역을 변경하시겠습니까?',
      `활동 지역이 ${option?.label}(으)로 변경됩니다.`,
      [
        {
          text: '예',
          onPress: () => {
            console.log('지역 변경 성공');
          },
          style: 'destructive', // 빨간글씨
        },
        {
          text: '취소',
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>지역은 하나만 선택 가능합니다.</Text>
      <RadioButton
        options={areaOptions}
        size="medium"
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <CustomButton
        label="수정 완료"
        style={[{position: 'absolute', bottom: insets.bottom + 20}]}
        onPress={onPressModifyButton}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  text: {
    marginTop: 17,
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 13,
    color: colors.GRAY_300,
  },
});

export default AreaChangeScreen;
