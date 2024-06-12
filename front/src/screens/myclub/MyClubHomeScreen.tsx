import ClubProfileImageContainer from '@/components/main/ClubProfileImageContainer';
import {colors, styleValues} from '@/constants';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface MyClubHomeScreenProps {}

function MyClubHomeScreen({}: MyClubHomeScreenProps) {
  const isData = false; // 임시 가입된 동아리 여부
  return (
    <SafeAreaView style={styles.container}>
      {isData ? (
        <View style={styles.alignContainer}>
          {/* 실제 데이터 있으면 FlatList로 가져오기 */}
          <ClubProfileImageContainer />
        </View>
      ) : (
        <View style={styles.clubNoneContainer}>
          <Text style={styles.clubNoneText}>가입된 동아리가 없습니다.</Text>
        </View>
      )}
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
    marginTop: 35,
    alignItems: 'flex-start', // 임시로 설정 나중에 지우기
  },
  clubNoneContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clubNoneText: {
    fontSize: styleValues.H3_FONT_SIZE,
    color: colors.INVALID_TEXT,
  },
});

export default MyClubHomeScreen;
