import HeaderBackButton from '@/components/common/HeaderBackButton';
import HeaderLeft from '@/components/common/HeaderLeft';
import {calendarNavigations, colors} from '@/constants';
import CalendarHomeScreen from '@/screens/calendar/CalendarHomeScreen';
import CalendarScheduleScreen from '@/screens/calendar/CalendarScheduleScreen';
import {BlurView} from '@react-native-community/blur';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export type CalendarStackParamList = {
  [calendarNavigations.CALENDAR_HOME]: undefined;
  [calendarNavigations.SCHEDULE_ADD]: undefined;
};

const Stack = createStackNavigator<CalendarStackParamList>();

function CalendarStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.WHITE,
        },
        headerShadowVisible: false,
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name={calendarNavigations.CALENDAR_HOME}
        component={CalendarHomeScreen}
        options={{
          headerTitle: ' ',
        }}
      />
      <Stack.Screen
        name={calendarNavigations.SCHEDULE_ADD}
        component={CalendarScheduleScreen}
        options={{
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerTitle: '일정',
          headerLeft: () => <HeaderBackButton />,
        }}
      />
    </Stack.Navigator>
  );
}

export default CalendarStackNavigator;
