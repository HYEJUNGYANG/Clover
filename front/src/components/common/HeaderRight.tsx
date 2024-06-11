import {styleValues} from '@/constants';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

interface HeaderRightProps {}

function HeaderRight({}: HeaderRightProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: styleValues.CONTAINER_MARGIN_HORIZONTAL,
        gap: 20,
      }}>
      <Pressable>
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
    </View>
  );
}

const styles = StyleSheet.create({});

export default HeaderRight;
