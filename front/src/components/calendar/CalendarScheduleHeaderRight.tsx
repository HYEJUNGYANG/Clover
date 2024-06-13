import {colors, styleValues} from '@/constants';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

function CalendarScheduleHeaderRight(onPress: () => void) {
  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && {opacity: 0.6}]}>
      <Text style={styles.text}>등록</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  text: {
    color: colors.MAIN_GREEN,
    fontSize: styleValues.H3_FONT_SIZE,
    fontWeight: '600',
  },
});

export default CalendarScheduleHeaderRight;
