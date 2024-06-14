import {clubNavigations, colors, styleValues} from '@/constants';
import {MainNavigation} from '@/screens/main/MainHomeScreen';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface MainClubContainerProps {
  isPadding?: boolean;
}

// 동아리이름, 소개글, 카테고리, 지역, 인원수, 동아리프로필
function ClubContainer({isPadding = true}: MainClubContainerProps) {
  const navigation = useNavigation<MainNavigation>();
  const clubName = '클로버';

  return (
    <Pressable
      style={[styles.container, isPadding && styles.containerPadding]}
      onPress={() => navigation.navigate(clubNavigations.CLUB_PAGE)}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/kirby-profile.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentsContainer}>
        <Text style={styles.clubName}>커비좋아하는 사람 모여라!</Text>
        <Text
          style={styles.clubDescription}
          numberOfLines={1}
          ellipsizeMode="tail">
          동아리 소개글 테스트입니다.
          마너오라ㅣㄴㅁㅇ론밍로ㅓ민오러ㅏㅣㅁㄴ오러ㅏㅣㅁㄴ오라ㅣㅁㄴ오러ㅏㅣㅁㄴ오러ㅣㅏㅁㄴ오ㅓㅣㅏㅁㄴ오러ㅣㅏㄴ몽러ㅏㅣㅁ노어ㅏㅣ몬어ㅏㅣㅗㅁㄴㅇ러ㅏㅣㅗㄴㅁㅇ라ㅓㅣㅗㄴㅁㅇ러ㅣㅏㅗㅁㄴ아ㅓㅣ롬ㄴ아ㅣㅓㅗㅁ너ㅏ이ㅗㄴ미ㅏ
        </Text>
        <View style={styles.clubInfoContainer}>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>친목</Text>
          </View>
          <View style={styles.locationContainer}>
            <Image
              resizeMode="contain"
              source={require('@/assets/icon/location-icon.png')}
              style={{width: 7, height: 9}}
            />
            <Text style={styles.locationText}>부산</Text>
          </View>
          <View style={styles.memberContainer}>
            <Image
              resizeMode="contain"
              source={require('@/assets/icon/member-number-icon.png')}
              style={{width: 12, height: 12}}
            />
            <Text style={styles.numberText}>21명</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  containerPadding: {
    paddingBottom: 20,
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 3,
  },
  clubName: {
    fontSize: styleValues.H3_FONT_SIZE,
    fontWeight: '500',
    color: colors.BLACK,
  },
  clubDescription: {
    fontSize: styleValues.H4_FONT_SIZE,
    color: colors.GRAY_600,
  },
  clubInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  categoryContainer: {
    backgroundColor: '#F1F1F1',
    borderRadius: 40,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  categoryText: {
    fontSize: styleValues.H4_FONT_SIZE,
    color: colors.GRAY_600,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  locationText: {
    color: colors.GRAY_600,
    fontSize: styleValues.H4_FONT_SIZE,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  numberText: {
    fontSize: styleValues.H4_FONT_SIZE,
    color: colors.GRAY_500,
  },
});

export default ClubContainer;
