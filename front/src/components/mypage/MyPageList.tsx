import {colors, styleValues} from '@/constants';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ImageSource} from 'react-native-vector-icons/Icon';

interface MyPageListProps {
  item: {
    label: string;
    icon: ImageSource;
    width: number;
    height: number;
  };
}

function MyPageList({item}: MyPageListProps) {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 24,
        borderBottomColor: '#EBEBEB',
        borderBottomWidth: 1.5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 19}}>
        <Image
          source={item.icon}
          style={{width: item.width, height: item.height}}
        />
        <Text
          style={{
            color: colors.BLACK,
            fontWeight: '500',
            fontSize: styleValues.H2_FONT_SIZE,
          }}>
          {item.label}
        </Text>
      </View>
      <Image
        source={require('@/assets/icon/mypage/button-icon.png')}
        style={{width: 14, height: 14}}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default MyPageList;
