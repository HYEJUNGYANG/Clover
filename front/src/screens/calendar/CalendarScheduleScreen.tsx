import CalendarScheduleHeaderRight from '@/components/calendar/CalendarScheduleHeaderRight';
import {
  calendarNavigations,
  colorPalettes,
  colors,
  styleValues,
} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CalendarNavigation} from './CalendarHomeScreen';
import useDateStore from '@/store/useDateStore';
import {getDayOfWeek} from '@/utils';
import {BlurView} from '@react-native-community/blur';
import useModal from '@/hooks/useModal';
import ColorPaletteBox, {
  ColorPaletteBoxProps,
} from '@/components/calendar/ColorPaletteBox';
import useCalendarColorStore from '@/store/useCalendarColorStore';

interface CalendarScheduleScreenProps {}

function CalendarScheduleScreen({}: CalendarScheduleScreenProps) {
  const navigation = useNavigation<CalendarNavigation>();
  const {monthYear, selectedDate} = useDateStore();
  const colorPaletteBoxRef = useRef<ColorPaletteBoxProps>(null);
  const {paletteColor, setPaletteColor} = useCalendarColorStore();

  const dateToString = `${monthYear?.year}-${monthYear?.month}-${selectedDate}`;

  //   const showModal = (show: () => void) => {
  //     show();
  //   };
  //   const hideModal = (show: () => void) => {
  //     show();
  //   };

  const handleShowColorPalette = () => {
    colorPaletteBoxRef.current?.show();
  };

  useEffect(() => {
    setPaletteColor(colorPalettes[colorPalettes.length - 1]);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => CalendarScheduleHeaderRight(() => {}),
    });
  }, [navigation]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.alignContainer}>
          <View style={styles.dateNameContainer}>
            <Pressable
              style={[
                styles.colorContainer,
                {
                  backgroundColor: paletteColor
                    ? paletteColor
                    : colorPalettes[colorPalettes.length - 1],
                },
              ]}
              onPress={handleShowColorPalette}
            />
            <TextInput
              placeholder="일정 이름을 입력해주세요."
              style={styles.dateNameInput}
            />
          </View>
          <View style={styles.lineContainer}>
            <Text style={styles.title}>일시</Text>
            <Pressable>
              <Text style={styles.date}>{`${monthYear?.year}.${String(
                monthYear?.month,
              ).padStart(2, '0')}.${String(selectedDate).padStart(
                2,
                '0',
              )}(${getDayOfWeek(dateToString)}) `}</Text>
            </Pressable>
          </View>
          <View style={styles.lineContainer}>
            <Text style={styles.title}>장소</Text>
            <TextInput
              placeholder="일정 장소를 입력해주세요."
              style={styles.placeInput}
            />
          </View>
          <TextInput
            multiline
            autoCapitalize="none"
            placeholder="일정 본문을 작성해주세요."
            style={styles.contentsInput}
          />
        </View>
      </SafeAreaView>

      <ColorPaletteBox ref={colorPaletteBoxRef} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  dateNameContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 15,
    borderBottomColor: colors.GRAY_100,
    borderBottomWidth: 1,
  },
  colorContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  dateNameInput: {
    fontSize: styleValues.H2_FONT_SIZE,
    fontWeight: '500',
    color: colors.BLACK,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 30,
    borderBottomColor: colors.GRAY_100,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: styleValues.H3_FONT_SIZE,
    color: colors.BLACK,
  },
  date: {
    color: colors.BLACK,
    fontSize: styleValues.H3_FONT_SIZE,
  },
  placeInput: {
    color: colors.BLACK,
    fontSize: styleValues.H3_FONT_SIZE,
  },
  contentsInput: {
    color: colors.BLACK,
    fontSize: styleValues.H3_FONT_SIZE,
    paddingVertical: 20,
  },
});

export default CalendarScheduleScreen;
