import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

interface ShowPasswordIconProps {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowPasswordIcon({isShow, setIsShow}: ShowPasswordIconProps) {
  return (
    <Pressable
      style={({pressed}) => [styles.iconStyle, pressed && {opacity: 0.7}]}
      onPress={() => setIsShow(prev => !prev)}>
      <Image
        source={
          isShow
            ? require('@/assets/icon/hide-icon.png')
            : require('@/assets/icon/show-icon.png')
        }
        style={{width: 24, height: 14.23}}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    right: 24,
  },
});

export default ShowPasswordIcon;
