import HeaderLeft from '@/components/common/HeaderLeft';
import {colors, myPageNavigations} from '@/constants';
import MyPageHomeScreen from '@/screens/mypage/MyPageHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export type MyPageStackParamList = {
  [myPageNavigations.MYPAGE_HOME]: undefined;
  [myPageNavigations.PROFILE_EDIT]: undefined;
  [myPageNavigations.HEART_LIST]: undefined;
  [myPageNavigations.CREATE_CLUB]: undefined;
};

const Stack = createStackNavigator<MyPageStackParamList>();

function MyPageStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={myPageNavigations.MYPAGE_HOME}
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.WHITE,
        },
      }}>
      <Stack.Screen
        name={myPageNavigations.MYPAGE_HOME}
        component={MyPageHomeScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: ' ',
          headerLeft: () => <HeaderLeft isBack={false} title="마이페이지" />,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default MyPageStackNavigator;
