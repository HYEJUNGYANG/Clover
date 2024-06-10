import {colors} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function HeaderBackButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={() => navigation.goBack()}>
      <MaterialIcons name="arrow-back-ios" size={20} color={colors.BLACK} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  pressed: {
    opacity: 0.6,
  },
});

export default HeaderBackButton;
