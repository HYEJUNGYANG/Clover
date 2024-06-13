import Calendar from '@/components/calendar/Calendar';
import {colors, styleValues} from '@/constants';
import {getMonthYearDetails, getNewMonthYear} from '@/utils';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function CalendarHomeScreen() {
  const currentMonthYear = getMonthYearDetails(new Date());
  const [monthYear, setMonthYear] = useState(currentMonthYear);
  const [selectedDate, setSelectedDate] = useState(0);
  const tabBarHeight = useBottomTabBarHeight();
  const isAndroid = Platform.OS === 'android';

  const handlePressDate = (date: number) => {
    setSelectedDate(date);
  };

  const handleUpdateMonth = (increment: number) => {
    setMonthYear(prev => getNewMonthYear(prev, increment));
  };

  const moveToToday = () => {
    setSelectedDate(new Date().getDate());
    setMonthYear(getMonthYearDetails(new Date()));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignContainer}>
        <Calendar
          monthYear={monthYear}
          onChangeMonth={handleUpdateMonth}
          selectedDate={selectedDate}
          onPressDate={handlePressDate}
          moveToToday={moveToToday}
        />
        <Pressable
          style={[
            styles.plusButton,
            {bottom: tabBarHeight + (isAndroid ? 25 : -10)},
          ]}>
          <Image
            resizeMode="contain"
            source={require('@/assets/icon/calendar/plus-icon.png')}
            style={{width: 19, height: 19}}
          />
        </Pressable>
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
  plusButton: {
    zIndex: 10,
    position: 'absolute',
    right: 0,
    backgroundColor: colors.MAIN_GREEN,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.15,
    elevation: 3,
  },
});

export default CalendarHomeScreen;
