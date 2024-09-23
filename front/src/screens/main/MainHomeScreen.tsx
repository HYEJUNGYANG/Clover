import HeaderRight from '@/components/common/HeaderRight';
import ClubContainer from '@/components/main/ClubContainer';
import MainHomeClubContainer from '@/components/main/MainHomeClubContainer';
import {colors, mainNavigations, styleValues} from '@/constants';
import {MainStackParamList} from '@/navigations/stack/MainStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {
  Image,
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

  const handleAreaChange = () => {
    navigation.navigate(mainNavigations.AREA_CHANGE);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 11,
            marginLeft: styleValues.CONTAINER_MARGIN_HORIZONTAL,
          }}
          onPress={handleAreaChange}>
          <Image
            source={require('@/assets/icon/header-location-icon.png')}
            style={{width: 14, height: 18}}
          />
          <Text
            style={{
              fontSize: styleValues.H1_FONT_SIZE,
              fontWeight: styleValues.H1_FONT_WEIGHT,
              color: colors.BLACK,
            }}>
            부산
          </Text>
        </Pressable>
      ),
      headerRight: () => <HeaderRight />,
    });
  }, [navigation]);

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
