import ClubContainer from '@/components/main/ClubContainer';
import MainHomeClubContainer from '@/components/main/MainHomeClubContainer';
import {colors, mainNavigations, styleValues} from '@/constants';
import {MainStackParamList} from '@/navigations/stack/MainStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

export type MainNavigation = StackNavigationProp<MainStackParamList>;

interface MainHomeScreenProps {}

function MainHomeScreen({}: MainHomeScreenProps) {
  const navigation = useNavigation<MainNavigation>();

  return (
    <SafeAreaView>
      <ScrollView>
        {/* 최근 개설 */}
        <MainHomeClubContainer
          title="최근 개설 동아리"
          isMore
          handleNavigate={() =>
            navigation.navigate(mainNavigations.MAIN_RECENT)
          }
        />

        {/* 인기 동아리 */}
        <MainHomeClubContainer
          title="인기 동아리"
          isMore
          handleNavigate={() => navigation.navigate(mainNavigations.MAIN_HOT)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default MainHomeScreen;
