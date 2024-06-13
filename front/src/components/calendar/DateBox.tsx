import {colors, styleValues} from '@/constants';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useHeaderHeight} from '@react-navigation/elements';
import React from 'react';
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface DateBoxProps {
  date: number;
  numRows: number;
  selectedDate: number;
  isToday: boolean;
  onPressDate: (date: number) => void;
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function DateBox({
  date,
  numRows,
  selectedDate,
  isToday,
  onPressDate,
}: DateBoxProps) {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  const isAndroid = Platform.OS === 'android';

  return (
    <Pressable
      style={[
        styles.container,
        {
          height:
            (deviceHeight -
              (headerHeight +
                tabBarHeight +
                55 +
                (isAndroid ? 30 : 0) +
                (numRows - 1) * 5)) /
            numRows,
        },
        date > 0 && styles.showContainer,
      ]}
      onPress={() => onPressDate(date)}>
      {date > 0 && (
        <>
          <View
            style={[
              styles.dateContainer,
              selectedDate === date && styles.selectedContainer,
              selectedDate === date && isToday && styles.selectedTodayContainer,
            ]}>
            <Text
              style={[
                styles.dateText,
                isToday && styles.todayText,
                selectedDate === date && styles.selectedDateText,
              ]}>
              {date}
            </Text>
          </View>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (deviceWidth - styleValues.CONTAINER_MARGIN_HORIZONTAL * 2 - 30) / 7,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginBottom: 5,
  },
  showContainer: {
    backgroundColor: '#F6F6F6',
  },
  dateContainer: {
    marginTop: 5,
    marginLeft: 5,
    justifyContent: 'center',
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  selectedContainer: {
    backgroundColor: colors.MAIN_GREEN,
  },
  selectedTodayContainer: {
    backgroundColor: colors.MAIN_PINK,
  },
  dateText: {
    alignSelf: 'center',
    fontSize: styleValues.H4_FONT_SIZE,
    color: colors.BLACK,
  },
  selectedDateText: {
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  todayText: {
    color: colors.MAIN_PINK,
    fontWeight: 'bold',
  },
  scheduleIndicator: {
    marginTop: 2,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.GRAY_500,
  },
});

export default DateBox;
