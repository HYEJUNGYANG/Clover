import {colors, styleValues} from '@/constants';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function CalendarHomeHeaderLeft(year: number) {
  return (
    <View style={styles.container}>
      <Text style={styles.yearText}>{year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  yearText: {
    fontSize: styleValues.H1_FONT_SIZE,
    fontWeight: styleValues.H1_FONT_WEIGHT,
    color: colors.BLACK,
  },
});

export default CalendarHomeHeaderLeft;
