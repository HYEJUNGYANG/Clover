import CustomButton from '@/components/common/CustomButton';
import {styleValues} from '@/constants';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface AreaChangeScreenProps {}

function AreaChangeScreen({}: AreaChangeScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Text>TEST</Text>
      <CustomButton
        label="수정 완료"
        style={[{position: 'absolute', bottom: insets.bottom + 20}]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
});

export default AreaChangeScreen;
