import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  clubNavigations,
  clubTopTabNavigations,
  colors,
  styleValues,
} from '@/constants';
import ClubInfoScreen from '@/screens/club/ClubInfoScreen';
import ClubBoardScreen from '@/screens/club/ClubBoardScreen';
import ClubCalendarScreen from '@/screens/club/ClubCalendarScreen';
import ClubMemberScreen from '@/screens/club/ClubMemberScreen';
import ClubHeaderRight from '@/components/club/ClubHeaderRight';

export type ClubTopTabParamList = {
  [clubTopTabNavigations.CLUB_HOME]: undefined;
  [clubTopTabNavigations.CLUB_INFO]: undefined;
  [clubTopTabNavigations.CLUB_BOARD]: undefined;
  [clubTopTabNavigations.CLUB_CALENDAR]: undefined;
  [clubTopTabNavigations.CLUB_MEMBER]: undefined;
};

const TopTab = createMaterialTopTabNavigator<ClubTopTabParamList>();

function ClubTopTabNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName={clubTopTabNavigations.CLUB_HOME}
      screenOptions={{
        tabBarActiveTintColor: colors.MAIN_GREEN, // 선택된 탭바 텍스트 컬러
        tabBarInactiveTintColor: '#A2A2A2', // 선택되지 않은 상태인 탭바 텍스트 컬러
        tabBarStyle: {
          borderBottomColor: '#F1F1F1',
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIndicatorStyle: {
          height: 5,
          backgroundColor: colors.MAIN_GREEN,
        },
      }}>
      <TopTab.Screen
        name={clubTopTabNavigations.CLUB_INFO}
        component={ClubInfoScreen}
        options={{
          tabBarLabel: '소개글',
        }}
      />
      <TopTab.Screen
        name={clubTopTabNavigations.CLUB_BOARD}
        component={ClubBoardScreen}
        options={{
          tabBarLabel: '게시판',
        }}
      />
      <TopTab.Screen
        name={clubTopTabNavigations.CLUB_CALENDAR}
        component={ClubCalendarScreen}
        options={{
          tabBarLabel: '캘린더',
        }}
      />
      <TopTab.Screen
        name={clubTopTabNavigations.CLUB_MEMBER}
        component={ClubMemberScreen}
        options={{
          tabBarLabel: '멤버',
        }}
      />
    </TopTab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default ClubTopTabNavigator;
