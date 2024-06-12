import {mainSearchNavigations, styleValues} from '@/constants';
import {MainSearchStackParamList} from '@/navigations/stack/MainSearchStackNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native';

interface HeaderRightProps {}

export type MainSearchNavigation =
  StackNavigationProp<MainSearchStackParamList>;

function HeaderRight({}: HeaderRightProps) {
  const navigation = useNavigation<MainSearchNavigation>();

  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: styleValues.CONTAINER_MARGIN_HORIZONTAL,
        gap: 20,
      }}>
      <Pressable
        onPress={() => navigation.navigate(mainSearchNavigations.SEARCH)}>
        <Image
          source={require('@/assets/icon/header-search-icon.png')}
          style={{width: 18.31, height: 20}}
        />
      </Pressable>
      <Pressable>
        <Image
          source={require('@/assets/icon/header-alarm-icon.png')}
          style={{width: 20, height: 20}}
        />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default HeaderRight;
