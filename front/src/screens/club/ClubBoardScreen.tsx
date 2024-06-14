import ClubRadioButton from '@/components/club/ClubRadioButton';
import {colors, styleValues} from '@/constants';
import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface ClubBoardScreenProps {}

function ClubBoardScreen({}: ClubBoardScreenProps) {
  const category = [
    {
      label: '전체',
      value: 'all',
    },
    {
      label: '자유',
      value: 'free',
    },
    {
      label: '번개',
      value: 'lighting',
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(
    category[0].value,
  );
  const isNotice = true; // 임시

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignContainer}>
        <View style={styles.boardCategory}>
          <ClubRadioButton
            options={category}
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
          />
        </View>
        {/* 공지 있을시 보여줌 */}
        {isNotice && (
          <View style={styles.noticeContainer}>
            <Image
              resizeMode="contain"
              source={require('@/assets/icon/club/notice-icon.png')}
              style={{width: 17, height: 17}}
            />
            <View style={styles.notice}>
              <Text
                style={styles.noticeText}
                numberOfLines={1}
                ellipsizeMode="tail">
                (필독)가입 인사 양식 관련 공지합니다!!
              </Text>
            </View>
          </View>
        )}
        <View style={styles.boardContainer}>
          <Text style={styles.boardNoneText}>게시물이 없습니다.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  boardCategory: {
    width: '100%',
    marginVertical: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  boardContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardNoneText: {
    fontSize: styleValues.H3_FONT_SIZE,
    color: '#565656',
  },
  noticeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  notice: {
    flex: 1,
    backgroundColor: '#ff05652c',
    padding: 10,
    borderRadius: 4,
  },
  noticeText: {
    fontSize: styleValues.H3_FONT_SIZE,
    fontWeight: styleValues.H1_FONT_WEIGHT,
    color: colors.BLACK,
  },
});

export default ClubBoardScreen;
