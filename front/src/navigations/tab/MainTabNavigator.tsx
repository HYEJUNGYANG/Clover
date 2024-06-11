import {colors, mainTabNavigations, mainNavigations} from '@/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainStackNavigator from '../stack/MainStackNavigator';
import CalendarHomeScreen from '@/screens/calendar/CalendarHomeScreen';
import MyClubHomeScreen from '@/screens/myclub/MyClubHomeScreen';
import MyPageHomeScreen from '@/screens/mypage/MyPageHomeScreen';

export type MainTabParamList = {
  [mainTabNavigations.HOME]: {
    screen: typeof mainNavigations.MAIN_HOME;
  };
  [mainTabNavigations.MY_CLUB]: undefined;
  [mainTabNavigations.CALENDAR]: undefined;
  [mainTabNavigations.MY_PAGE]: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

type tabNameList = '홈' | '내동아리' | '캘린더' | '마이페이지';

const deviceWidth = Dimensions.get('screen').width;

function TabBarIcons(route: RouteProp<MainTabParamList>, focused: boolean) {
  let tabName = '';
  let imgUrl: ImageSourcePropType | undefined;

  switch (route.name) {
    case mainTabNavigations.HOME:
      tabName = '홈';
      imgUrl = focused
        ? require('@/assets/icon/tabIcon/focus/home-icon.png')
        : require('@/assets/icon/tabIcon/home-icon.png');
      break;
    case mainTabNavigations.MY_CLUB:
      tabName = '내동아리';
      imgUrl = focused
        ? require('@/assets/icon/tabIcon/focus/my-club-icon.png')
        : require('@/assets/icon/tabIcon/my-club-icon.png');
      break;
    case mainTabNavigations.CALENDAR:
      tabName = '캘린더';
      imgUrl = focused
        ? require('@/assets/icon/tabIcon/focus/calendar-icon.png')
        : require('@/assets/icon/tabIcon/calendar-icon.png');
      break;
    case mainTabNavigations.MY_PAGE:
      tabName = '마이페이지';
      imgUrl = focused
        ? require('@/assets/icon/tabIcon/focus/mypage-icon.png')
        : require('@/assets/icon/tabIcon/mypage-icon.png');
      break;
  }

  return (
    <View
      style={{
        width: deviceWidth / 4,
        alignItems: 'center',
        gap: 5,
        paddingVertical: 10,
      }}>
      <View style={{width: 21, height: 21}}>
        <Image
          resizeMode="contain"
          source={imgUrl}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <Text
        style={[
          {color: colors.GRAY_300, fontSize: 10},
          focused && {color: colors.MAIN_GREEN},
        ]}>
        {tabName}
      </Text>
    </View>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        initialRouteName: mainTabNavigations.HOME,
        tabBarShowLabel: false, // 탭 네비게이터 아이콘만 보이도록
        tabBarActiveTintColor: colors.MAIN_GREEN,
        tabBarIcon: ({focused}) => TabBarIcons(route, focused),
      })}>
      <Tab.Screen
        name={mainTabNavigations.HOME}
        component={MainStackNavigator}
      />
      <Tab.Screen
        name={mainTabNavigations.MY_CLUB}
        component={MyClubHomeScreen}
      />
      <Tab.Screen
        name={mainTabNavigations.CALENDAR}
        component={CalendarHomeScreen}
      />
      <Tab.Screen
        name={mainTabNavigations.MY_PAGE}
        component={MyPageHomeScreen}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
