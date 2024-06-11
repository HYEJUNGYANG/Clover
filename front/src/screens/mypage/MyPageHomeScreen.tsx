import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface MyPageHomeScreenProps {}

function MyPageHomeScreen({}: MyPageHomeScreenProps) {
  return (
    <SafeAreaView>
      <Text>MyPage Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default MyPageHomeScreen;
