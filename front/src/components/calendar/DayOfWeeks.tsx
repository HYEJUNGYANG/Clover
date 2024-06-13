import {colors, styleValues} from '@/constants';
import React from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface DayOfWeeksProps {}

function DayOfWeeks({}: DayOfWeeksProps) {
  return (
    <View style={styles.container}>
      {['일', '월', '화', '수', '목', '금', '토'].map((dayOfWeek, i) => {
        return (
          <View key={i} style={styles.item}>
            <Text
              style={[
                styles.text,
                dayOfWeek === '토' && styles.saturdayText,
                dayOfWeek === '일' && styles.sundayText,
              ]}>
              {dayOfWeek}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  item: {
    width:
      (Dimensions.get('window').width -
        styleValues.CONTAINER_MARGIN_HORIZONTAL * 2) /
      7,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.BLACK,
  },
  saturdayText: {
    // color: ,
  },
  sundayText: {
    color: colors.RED,
  },
});

export default DayOfWeeks;
