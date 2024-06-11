import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderBackButton from './HeaderBackButton';
import {colors, styleValues} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainSearchStackParamList} from '@/navigations/stack/MainSearchStackNavigator';

interface HeaderLeftProps {
  isBack?: boolean;
  title?: string;
}

function HeaderLeft({isBack = true, title}: HeaderLeftProps) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      {isBack && <HeaderBackButton />}
      <View>
        <Text
          style={{
            fontSize: styleValues.H1_FONT_SIZE,
            fontWeight: styleValues.H1_FONT_WEIGHT,
            color: colors.BLACK,
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default HeaderLeft;
