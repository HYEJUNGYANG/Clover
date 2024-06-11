import HeaderBackButton from '@/components/common/HeaderBackButton';
import {colors, mainNavigations} from '@/constants';
import MainHomeScreen from '@/screens/main/MainHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type MainStackParamList = {
  [mainNavigations.MAIN_HOME]: undefined;
  [mainNavigations.MAIN_RECENT]: undefined;
  [mainNavigations.MAIN_HOT]: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.WHITE,
        },
        headerLeft: () => <HeaderBackButton />,
        // headerShadowVisible: false,
      }}
      initialRouteName={mainNavigations.MAIN_HOME}>
      <Stack.Screen
        name={mainNavigations.MAIN_HOME}
        component={MainHomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
