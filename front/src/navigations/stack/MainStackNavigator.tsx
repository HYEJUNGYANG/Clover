import HeaderBackButton from '@/components/common/HeaderBackButton';
import HeaderLeft from '@/components/common/HeaderLeft';
import HeaderRight from '@/components/common/HeaderRight';
import {
  clubNavigations,
  colors,
  mainNavigations,
  styleValues,
} from '@/constants';
import ClubScreen from '@/screens/club/ClubScreen';
import MainHomeScreen from '@/screens/main/MainHomeScreen';
import MainHotScreen from '@/screens/main/MainHotScreen';
import MainRecentScreen from '@/screens/main/MainRecentScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, View} from 'react-native';
import ClubTopTabNavigator from '../topTab/ClubTopTabNavigator';
import ClubHeaderRight from '@/components/club/ClubHeaderRight';

export type MainStackParamList = {
  [mainNavigations.MAIN_HOME]: undefined;
  [mainNavigations.MAIN_RECENT]: undefined;
  [mainNavigations.MAIN_HOT]: undefined;
  [clubNavigations.CLUB_PAGE]: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.WHITE,
        },
        headerShadowVisible: false,
      }}
      initialRouteName={mainNavigations.MAIN_HOME}>
      <Stack.Screen
        name={mainNavigations.MAIN_HOME}
        component={MainHomeScreen}
        options={{
          headerTitle: ' ',
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 11,
                marginLeft: styleValues.CONTAINER_MARGIN_HORIZONTAL,
              }}>
              <Image
                source={require('@/assets/icon/header-location-icon.png')}
                style={{width: 14, height: 18}}
              />
              <Text
                style={{
                  fontSize: styleValues.H1_FONT_SIZE,
                  fontWeight: styleValues.H1_FONT_WEIGHT,
                  color: colors.BLACK,
                }}>
                부산
              </Text>
            </View>
          ),
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen
        name={mainNavigations.MAIN_RECENT}
        component={MainRecentScreen}
        options={{
          headerTitle: ' ',
          headerLeft: () => <HeaderLeft title="최근 개설 동아리" />,
        }}
      />
      <Stack.Screen
        name={mainNavigations.MAIN_HOT}
        component={MainHotScreen}
        options={{
          headerTitle: ' ',
          headerLeft: () => <HeaderLeft title="인기 동아리" />,
        }}
      />
      <Stack.Screen
        name={clubNavigations.CLUB_PAGE}
        component={ClubTopTabNavigator}
        options={{
          headerTitle: ' ',
          headerLeft: () => <HeaderLeft title="클로버" />,
          headerRight: () => <ClubHeaderRight />,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
