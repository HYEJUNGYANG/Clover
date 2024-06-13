import HeaderLeft from '@/components/common/HeaderLeft';
import {calendarNavigations, colors} from '@/constants';
import CalendarHomeScreen from '@/screens/calendar/CalendarHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
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
      }}>
      <Stack.Screen
        name={calendarNavigations.CALENDAR_HOME}
        component={CalendarHomeScreen}
        options={{
          headerTitle: ' ',
          headerLeft: () => <HeaderLeft title="캘린더" isBack={false} />,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default CalendarStackNavigator;
