import ClubList from '@/components/main/ClubList';
import {styleValues} from '@/constants';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

interface MainHotScreenProps {}

function MainHotScreen({}: MainHotScreenProps) {
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

export default MainHotScreen;
