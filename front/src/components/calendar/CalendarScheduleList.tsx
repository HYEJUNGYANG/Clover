import {calendarNavigations, colors, styleValues} from '@/constants';
import {CalendarNavigation} from '@/screens/calendar/CalendarHomeScreen';
import useDateStore from '@/store/useDateStore';
import {BlurView} from '@react-native-community/blur';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {
  Dimensions,
  GestureResponderEvent,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface CalendarScheduleListProps {
  isVisible: boolean;
  hide: () => void;
}

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('window').height;

function CalendarScheduleList({isVisible, hide}: CalendarScheduleListProps) {
  const {monthYear, selectedDate} = useDateStore();
  const navigation = useNavigation<CalendarNavigation>();

  const onClickOutSide = (event: GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      hide();
    }
  };

  const handlePlusButton = () => {
    hide();
    navigation.navigate(calendarNavigations.SCHEDULE_ADD);
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={hide}>
      <BlurView
        style={styles.blurAbsolute}
        blurType="extraDark"
        blurAmount={2}
        onTouchEnd={onClickOutSide}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.alignContainer}>
          <Text>{`${monthYear?.month}월 ${selectedDate}일`}</Text>
        </View>
        <Pressable style={[styles.plusButton]} onPress={handlePlusButton}>
          <Image
            resizeMode="contain"
            source={require('@/assets/icon/calendar/plus-icon.png')}
            style={{width: 19, height: 19}}
          />
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  blurAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    alignSelf: 'center',
    backgroundColor: colors.WHITE,
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.6,
    marginTop: deviceHeight * 0.2,
    borderRadius: 15,
  },
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  plusButton: {
    zIndex: 1,
    position: 'absolute',
    bottom: 15,
    right: 15,
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

export default CalendarScheduleList;
