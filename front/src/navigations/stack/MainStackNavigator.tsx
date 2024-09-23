import HeaderLeft from '@/components/common/HeaderLeft';
import {clubNavigations, colors, mainNavigations} from '@/constants';
import MainHotScreen from '@/screens/main/MainHotScreen';
import MainRecentScreen from '@/screens/main/MainRecentScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ClubTopTabNavigator from '../topTab/ClubTopTabNavigator';
import ClubHeaderRight from '@/components/club/ClubHeaderRight';
import MainHomeScreen from '@/screens/main/MainHomeScreen';
import AreaChangeScreen from '@/screens/main/AreaChangeScreen';

export type MainStackParamList = {
  [mainNavigations.MAIN_HOME]: undefined;
  [mainNavigations.AREA_CHANGE]: undefined;
  [mainNavigations.MAIN_RECENT]: undefined;
  [mainNavigations.MAIN_HOT]: undefined;
  [clubNavigations.CLUB_PAGE]: {clubName: string} | undefined;
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
          headerShown: true,
          headerTitle: ' ',
        }}
      />
      <Stack.Screen
        name={mainNavigations.AREA_CHANGE}
        component={AreaChangeScreen}
        options={{
          headerShown: true,
          headerTitle: ' ',
          headerLeft: () => <HeaderLeft title="활동 지역 수정" />,
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
        options={({route}) => {
          const clubName = route.params?.clubName || '클로버';

          return {
            headerTitle: ' ',
            headerLeft: () => <HeaderLeft title={clubName} />,
            headerRight: () => <ClubHeaderRight />,
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
