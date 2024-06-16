import ClubCalendarList from '@/components/club/ClubCalendarList';
import {colors, styleValues} from '@/constants';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface ClubCalendarScreenProps {}

function ClubCalendarScreen({}: ClubCalendarScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignContainer}>
        <ClubCalendarList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
    gap: 12,
    marginVertical: 17,
  },
});

export default ClubCalendarScreen;
