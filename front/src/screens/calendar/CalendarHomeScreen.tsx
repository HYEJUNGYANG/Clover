import Calendar from '@/components/calendar/Calendar';
import {calendarNavigations, colors, styleValues} from '@/constants';
import {CalendarStackParamList} from '@/navigations/stack/CalendarStackNavigator';
import useDateStore from '@/store/useDateStore';
import {getMonthYearDetails, getNewMonthYear} from '@/utils';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type CalendarNavigation = StackNavigationProp<CalendarStackParamList>;

function CalendarHomeScreen() {
  const {monthYear, selectedDate, setMonthYear, setSelectedDate} =
    useDateStore();
  const currentMonthYear = getMonthYearDetails(new Date());

  const navigation = useNavigation<CalendarNavigation>();

  useEffect(() => {
    setSelectedDate(new Date().getDate());
    setMonthYear(currentMonthYear);
  }, []);

  const handlePressDate = (date: number) => {
    setSelectedDate(date);
  };

  const handleUpdateMonth = (increment: number) => {
    setMonthYear(
      getNewMonthYear(monthYear ? monthYear : currentMonthYear, increment),
    );
  };

  const moveToToday = () => {
    setSelectedDate(new Date().getDate());
    setMonthYear(getMonthYearDetails(new Date()));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignContainer}>
        <Calendar
          monthYear={monthYear ? monthYear : currentMonthYear}
          onChangeMonth={handleUpdateMonth}
          selectedDate={selectedDate ? selectedDate : new Date().getDate()}
          onPressDate={handlePressDate}
          moveToToday={moveToToday}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
});

export default CalendarHomeScreen;
