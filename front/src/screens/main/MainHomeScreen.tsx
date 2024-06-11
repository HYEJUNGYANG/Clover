import MainClubContainer from '@/components/main/MainClubContainer';
import {colors, mainNavigations, styleValues} from '@/constants';
import {MainStackParamList} from '@/navigations/stack/MainStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type MainNavigation = StackNavigationProp<MainStackParamList>;

interface MainHomeScreenProps {}

function MainHomeScreen({}: MainHomeScreenProps) {
  const navigation = useNavigation<MainNavigation>();
  // 더보기 버튼 마크업을 위해서
  const isRecentMany = true;
  return (
    <SafeAreaView>
      <ScrollView>
        {/* 최근 개설 */}
        <View style={[styles.alignContainer, {marginTop: 35}]}>
          <View
            style={{
              paddingHorizontal: 20,
              borderColor: '#f1f1f1',
              borderWidth: 1,
              borderRadius: 12,
            }}>
            <Text style={styles.recentTitle}>최근 개설 동아리</Text>
            <MainClubContainer />
            <MainClubContainer />
            <MainClubContainer />
            <MainClubContainer />
            <MainClubContainer />
            {isRecentMany && (
              <Pressable
                style={styles.moreButton}
                onPress={() =>
                  navigation.navigate(mainNavigations.MAIN_RECENT)
                }>
                <Text style={styles.moreButtonText}>더보기</Text>
              </Pressable>
            )}
          </View>
        </View>

        {/* 인기 동아리 */}
        <View style={[styles.alignContainer, {marginVertical: 30}]}>
          <View
            style={{
              paddingHorizontal: 20,
              borderColor: '#f1f1f1',
              borderWidth: 1,
              borderRadius: 12,
            }}>
            <Text style={styles.recentTitle}>인기 동아리</Text>
            <MainClubContainer />
            <MainClubContainer />
            <MainClubContainer />
            <MainClubContainer />
            <MainClubContainer />
            {isRecentMany && (
              <Pressable
                style={styles.moreButton}
                onPress={() => navigation.navigate(mainNavigations.MAIN_HOT)}>
                <Text style={styles.moreButtonText}>더보기</Text>
              </Pressable>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 18,
    color: colors.BLACK,
  },
  moreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderTopColor: '#f1f1f1',
    borderTopWidth: 1,
  },
  moreButtonText: {
    color: colors.BLACK,
    fontSize: 12,
  },
});

export default MainHomeScreen;
