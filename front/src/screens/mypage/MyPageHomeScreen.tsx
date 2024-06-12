import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors, styleValues} from '@/constants';
import MyPageList from '@/components/mypage/MyPageList';

interface MyPageHomeScreenProps {}

function MyPageHomeScreen({}: MyPageHomeScreenProps) {
  const isFavorite = true; // 임시용도
  // 나중에 페이지 name걸어두기 (navigation)
  const myPageList = [
    {
      label: '찜 리스트',
      icon: require('@/assets/icon/mypage/heart-icon.png'),
      width: 25,
      height: 22.12,
    },
    {
      label: '최근 본 모임',
      icon: require('@/assets/icon/mypage/recent-icon.png'),
      width: 25,
      height: 26.05,
    },
    {
      label: '내 동아리 개설',
      icon: require('@/assets/icon/mypage/myclub-icon.png'),
      width: 25,
      height: 19,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              resizeMode="cover"
              source={require('@/assets/kirby-profile.jpeg')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileInfoContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.nickName}>귀여운게최고</Text>
              <View style={styles.dividerContainer}>
                <Text style={styles.dividerText}>2000.01.07</Text>
                <View
                  style={{
                    width: 1,
                    height: '80%',
                    borderRightColor: colors.BLACK,
                    borderRightWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <Text style={styles.dividerText}>부산</Text>
              </View>
            </View>
            <Pressable style={styles.editButton}>
              <Text style={styles.editText}>수정</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.myFavoriteContainer}>
          <Text style={styles.favoriteText}>나의 관심사</Text>
          {isFavorite ? (
            <View style={styles.favoriteExistContainer}>
              {/* 값 있을때는 FlatList로 하기 */}
              <View style={styles.favoriteItemContainer}>
                <Text style={styles.favoriteItemText}>운동</Text>
              </View>
              <View style={styles.favoriteItemContainer}>
                <Text style={styles.favoriteItemText}>댄스</Text>
              </View>
              <View style={styles.favoriteItemContainer}>
                <Text style={styles.favoriteItemText}>사진</Text>
              </View>
            </View>
          ) : (
            <Pressable style={styles.favoriteNoneContainer}>
              <Text style={styles.favoriteNoneText}>
                관심분야를 선택해주세요.
              </Text>
            </Pressable>
          )}
        </View>
        <View
          style={{
            height: 8,
            width: '100%',
            backgroundColor: '#F1F1F1',
            marginTop: 11,
            borderRadius: 5,
          }}
        />
        <View style={styles.myPageListContainer}>
          {myPageList.map(item => (
            <MyPageList item={item} key={item.label} />
          ))}
        </View>
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: 1.5,
  },
  profileImageContainer: {
    width: 75,
    height: 75,
    borderRadius: 75,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileInfoContainer: {
    flex: 1,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 14,
  },
  infoContainer: {
    height: 75,
    justifyContent: 'center',
    gap: 10,
  },
  nickName: {
    color: colors.BLACK,
    fontSize: styleValues.H2_FONT_SIZE,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  dividerText: {
    color: colors.BLACK,
    fontSize: styleValues.H3_FONT_SIZE,
  },
  editButton: {
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 100,
  },
  editText: {
    fontSize: 12,
    color: '#525252',
  },
  myFavoriteContainer: {
    marginTop: 20,
  },
  favoriteText: {
    fontSize: styleValues.H2_FONT_SIZE,
    fontWeight: '500',
  },
  favoriteExistContainer: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  favoriteItemContainer: {
    borderColor: colors.GRAY_100,
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  favoriteItemText: {
    color: colors.BLACK,
    fontSize: styleValues.H3_FONT_SIZE,
  },
  favoriteNoneContainer: {
    height: 44,
    justifyContent: 'center',
  },
  favoriteNoneText: {
    fontSize: styleValues.H3_FONT_SIZE,
    color: colors.GRAY_400,
  },
  myPageListContainer: {},
});

export default MyPageHomeScreen;
