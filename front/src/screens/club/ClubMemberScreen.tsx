import {colors, styleValues} from '@/constants';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface ClubMemberScreenProps {}

function ClubMemberScreen({}: ClubMemberScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignContainer}>
        <Text>Member</Text>
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
  },
});

export default ClubMemberScreen;
