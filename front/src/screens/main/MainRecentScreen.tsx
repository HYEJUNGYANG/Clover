import ClubList from '@/components/main/ClubList';
import {styleValues} from '@/constants';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

interface MainRecentScreenProps {}

function MainRecentScreen({}: MainRecentScreenProps) {
  return (
    <ScrollView>
      <View
        style={{paddingHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL}}>
        <ClubList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default MainRecentScreen;
