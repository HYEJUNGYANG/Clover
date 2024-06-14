import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useLayoutEffect} from 'react';
import {Pressable, SafeAreaView} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {clubNavigations, clubTopTabNavigations} from '@/constants';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {ClubTopTabParamList} from '@/navigations/topTab/ClubTopTabNavigator';
import HeaderLeft from '@/components/common/HeaderLeft';
import {MainNavigation} from '../main/MainHomeScreen';
import {HeaderTitle} from '@react-navigation/elements';
import HeaderRight from '@/components/common/HeaderRight';
import {MainStackParamList} from '@/navigations/stack/MainStackNavigator';

type ClubScreenProps = StackScreenProps<
  MainStackParamList,
  typeof clubNavigations.CLUB_PAGE
>;

function ClubScreen({route}: ClubScreenProps) {
  const clubName = '클로버'; // 임시
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      HeaderTitle: '클로버',
    });
  }, [navigation]);

  return <SafeAreaView></SafeAreaView>;
}

const styles = StyleSheet.create({});

export default ClubScreen;
