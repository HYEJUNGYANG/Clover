import CustomButton from '@/components/common/CustomButton';
import HeaderLeft from '@/components/common/HeaderLeft';
import HeaderRight from '@/components/common/HeaderRight';
import {colors, styleValues} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ClubInfoScreenProps {}

function ClubInfoScreen({}: ClubInfoScreenProps) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const isImage = true; // 임시
  const isJoined = true; // 임시

  useEffect(() => {
    navigation.setOptions({
      HeaderTitle: '커비 좋아하는 사람 모여라',
      HeaderRight: () => <HeaderRight />,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignContainer}>
        {/* 동아리 정보 -Top- */}
        <View style={styles.infoContainer}>
          <View style={styles.clubProfileImageContainer}>
            <Image
              resizeMode="cover"
              source={require('@/assets/kirby-profile.jpeg')}
              style={styles.clubProfileImage}
            />
          </View>
          <View style={styles.infoContentsContainer}>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 13,
              }}>
              <Text
                style={{
                  fontSize: styleValues.H2_FONT_SIZE,
                  fontWeight: styleValues.H1_FONT_WEIGHT,
                  color: colors.BLACK,
                }}>
                커비 좋아하는 사람 모여라
              </Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
                <View style={{width: 10, height: 12}}>
                  <Image
                    resizeMode="contain"
                    source={require('@/assets/icon/club/member-icon.png')}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#A2A2A2',
                  }}>
                  32명
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <Text style={{color: colors.BLACK}}>부산</Text>
              <View>
                <Text
                  style={{
                    color: colors.MAIN_GREEN,
                    fontSize: styleValues.H3_FONT_SIZE,
                  }}>
                  운동
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* 동아리 메인 이미지 */}
        {isImage && (
          <View
            style={{
              aspectRatio: 16 / 9,
              width: '100%',
              borderRadius: 12,
              overflow: 'hidden',
            }}>
            <Image
              resizeMode="cover"
              source={require('@/assets/kirby-profile.jpeg')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        )}
        {/* 동아리 소개글 */}
        <View>
          <Text>
            동아리 소개글 테스트입니다.{'\n'}
            마너오라ㅣㄴㅁㅇ론밍로ㅓ민오러ㅏㅣㅁㄴ오러ㅏㅣㅁㄴ오라ㅣㅁㄴ오러ㅏㅣㅁㄴ오러ㅣㅏㅁㄴ오ㅓㅣㅏㅁㄴ오러ㅣㅏㄴ몽러ㅏㅣㅁ노어ㅏㅣ몬어ㅏㅣㅗㅁㄴㅇ러ㅏㅣㅗㄴㅁㅇ라ㅓㅣㅗㄴㅁㅇ러ㅣㅏㅗㅁㄴ아ㅓㅣ롬ㄴ아ㅣㅓㅗㅁ너ㅏ이ㅗㄴ미ㅏ
          </Text>
        </View>
      </View>
      {!isJoined && (
        <CustomButton
          label="가입하기"
          style={[styles.joinButton, {bottom: insets.bottom + 20}]}
        />
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
    gap: 13,
  },
  infoContainer: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  clubProfileImageContainer: {
    width: 55,
    height: 55,
    borderRadius: 10,
    overflow: 'hidden',
  },
  clubProfileImage: {
    width: '100%',
    height: '100%',
  },
  infoContentsContainer: {
    flex: 1,
    height: 55,
    gap: 5,
  },
  joinButton: {
    position: 'absolute',
    left: styleValues.CONTAINER_MARGIN_HORIZONTAL,
    right: styleValues.CONTAINER_MARGIN_HORIZONTAL,
    backgroundColor: colors.MAIN_GREEN,
  },
});

export default ClubInfoScreen;
