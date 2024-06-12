import {colors, styleValues} from '@/constants';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface ClubProfileImageContainerProps {}

function ClubProfileImageContainer({}: ClubProfileImageContainerProps) {
  const isMyClub = true; // 임시 설정
  return (
    <Pressable style={styles.container}>
      <View
        style={{
          width: 166,
          height: 166,
          backgroundColor: colors.MAIN_GREEN,
          borderRadius: 12,
        }}>
        <Image />
        {isMyClub && (
          <View style={styles.myclubContainer}>
            <Image
              source={require('@/assets/icon/myclub-icon.png')}
              style={{width: 18, height: 18}}
            />
          </View>
        )}
      </View>
      <Text style={styles.clubName}>클로버</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  myclubContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN_PINK,
    borderRadius: 24,
    shadowColor: colors.BLACK,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 4},
    elevation: 4,
  },
  clubName: {
    fontSize: styleValues.H2_FONT_SIZE,
    color: colors.BLACK,
    marginTop: 10,
  },
});

export default ClubProfileImageContainer;
