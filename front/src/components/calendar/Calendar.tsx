import React, {useEffect, useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import DayOfWeeks from './DayOfWeeks';
import {colors, styleValues} from '@/constants';
import {MonthYear, isSameAsCurrentDate} from '@/utils';
import {FlatList} from 'react-native-gesture-handler';
import DateBox from './DateBox';
import {useNavigation} from '@react-navigation/native';
import CalendarHomeHeaderRight from './CalendarHomeHeaderRight';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

interface CalendarProps<T> {
  monthYear: MonthYear;
  selectedDate: number;
  onPressDate: (date: number) => void;
  onChangeMonth: (increment: number) => void;
  moveToToday: () => void;
}

function Calendar<T>({
  monthYear,
  selectedDate,
  onPressDate,
  onChangeMonth,
  moveToToday,
}: CalendarProps<T>) {
  const {month, year, lastDate, firstDOW, startDate} = monthYear;
  const totalTiles = lastDate + firstDOW;
  const numRows = Math.ceil(totalTiles / 7); // 행 수 계산
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();
  const isAndroid = Platform.OS === 'android';

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => CalendarHomeHeaderRight(year),
    });
  }, [moveToToday, year]);

  return (
    <>
      <View style={styles.selectMonthContainer}>
        <Pressable
          style={({pressed}) => [pressed && {opacity: 0.5}]}
          onPress={() => onChangeMonth(-1)}>
          <Image
            resizeMode="contain"
            source={require('@/assets/icon/calendar/arrow-left-icon.png')}
            style={{width: 20, height: 20}}
          />
        </Pressable>
        <Text style={styles.month}>{month}월</Text>
        <Pressable
          style={({pressed}) => [pressed && {opacity: 0.5}]}
          onPress={() => onChangeMonth(1)}>
          <Image
            resizeMode="contain"
            source={require('@/assets/icon/calendar/arrow-right-icon.png')}
            style={{width: 20, height: 20}}
          />
        </Pressable>
      </View>
      <DayOfWeeks />
      <View style={styles.calendarContainer}>
        <FlatList
          scrollEnabled={false}
          data={Array.from({length: lastDate + firstDOW}, (_, i) => ({
            id: i,
            date: i - firstDOW + 1,
            numRows,
          }))}
          columnWrapperStyle={{gap: 5}}
          renderItem={({item}) => (
            <DateBox
              numRows={numRows}
              date={item.date}
              isToday={isSameAsCurrentDate(year, month, item.date)}
              selectedDate={selectedDate}
              onPressDate={onPressDate}
            />
          )}
          keyExtractor={item => String(item.id)}
          numColumns={7}
        />
        {!isSameAsCurrentDate(year, month, selectedDate) &&
          Boolean(selectedDate) && (
            <Pressable
              style={[
                styles.goToTodayButton,
                {bottom: tabBarHeight + 40 + (isAndroid ? 30 : -10)},
              ]}
              onPress={moveToToday}>
              <Ionicons name="chevron-back" color={colors.BLACK} size={10} />
              <Text style={styles.buttonText}>오늘</Text>
            </Pressable>
          )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  selectMonthContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  month: {
    width: 120,
    textAlign: 'center',
    color: colors.BLACK,
    fontSize: styleValues.H1_FONT_SIZE,
    fontWeight: '600',
  },
  calendarContainer: {
    height: '100%',
  },
  goToTodayButton: {
    position: 'absolute',
    right: '50%',
    transform: [{translateX: 30}],
    backgroundColor: colors.WHITE,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.BLACK,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 2,
  },
  buttonText: {
    color: colors.BLACK,
    fontSize: 12,
  },
});

export default Calendar;
