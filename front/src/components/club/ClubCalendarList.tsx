import {colors, styleValues} from '@/constants';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface ClubCalendarListProps {}

function ClubCalendarList({}: ClubCalendarListProps) {
  const day = 16; // 임시용
  const today = new Date().getDate(); // 나중에는 year, month, day 전부 확인하기! 지금은 임시
  return (
    <Pressable style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <Text style={[styles.dDayCount, today === day && styles.today]}>
          D-Day
        </Text>
        <Text style={styles.date}>2024년 6월 16일 13:00</Text>
      </View>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        13:00 정모 모집합니다!!
      </Text>
      <View style={styles.dateInfoContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>비용</Text>
          <Text
            style={styles.infoContent}
            numberOfLines={1}
            ellipsizeMode="tail">
            공짜
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>위치</Text>
          <Text
            style={styles.infoContent}
            numberOfLines={1}
            ellipsizeMode="tail">
            부산광역시 남구 대연동 스타벅스
          </Text>
        </View>
        <Text
          style={styles.dateContents}
          numberOfLines={1}
          ellipsizeMode="tail">
          안녕하세요! 동아리장 입니다. 이번에 정모를 하려고 하는데요 예...그
          준비물은 있을까요 없을까요?
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 4,
  },
  dDayCount: {
    color: colors.BLACK,
    fontSize: styleValues.H4_FONT_SIZE,
    fontWeight: '500',
  },
  today: {
    color: colors.MAIN_PINK,
  },
  date: {
    fontSize: styleValues.H4_FONT_SIZE,
    color: colors.MAIN_GREEN,
  },
  title: {
    color: colors.BLACK,
    fontSize: styleValues.H2_FONT_SIZE,
    fontWeight: '500',
  },
  dateInfoContainer: {
    gap: 4,
    marginTop: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoTitle: {
    color: '#A2A2A2',
    fontWeight: '600',
    fontSize: 11,
  },
  infoContent: {
    color: colors.BLACK,
    fontSize: 11,
  },
  dateContents: {
    color: colors.INVALID_TEXT,
    fontSize: 11,
  },
});

export default ClubCalendarList;
