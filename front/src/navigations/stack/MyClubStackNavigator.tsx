import HeaderLeft from '@/components/common/HeaderLeft';
import HeaderRight from '@/components/common/HeaderRight';
import {myClubNavigations} from '@/constants';
import MyClubHomeScreen from '@/screens/myclub/MyClubHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type MyClubStackParamList = {
  [myClubNavigations.MYCLUB_HOME]: undefined;
};

const Stack = createStackNavigator<MyClubStackParamList>();

function MyClubStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={myClubNavigations.MYCLUB_HOME}
        component={MyClubHomeScreen}
        options={{
          headerShown: true,
          headerTitle: ' ',
          headerLeft: () => <HeaderLeft title="내동아리" isBack={false} />,
          headerRight: () => <HeaderRight />,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyClubStackNavigator;
