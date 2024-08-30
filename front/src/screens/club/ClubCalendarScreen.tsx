import ClubCalendarList from '@/components/club/ClubCalendarList';
import {colors, styleValues} from '@/constants';
import React from 'react';
import {Pressable} from 'react-native';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ClubCalendarScreenProps {}

function ClubCalendarScreen({}: ClubCalendarScreenProps) {
  const insets = useSafeAreaInsets();
  const isAdmin = false; // 임시

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignContainer}>
        <ClubCalendarList />
      </View>
      {isAdmin && (
        <Pressable
          style={({pressed}) => [
            styles.addButton,
            {bottom: insets.bottom + styleValues.CONTAINER_MARGIN_HORIZONTAL},
            pressed && {opacity: 0.6},
          ]}>
          <Image
            resizeMode="contain"
            source={require('@/assets/icon/club/calendar-add-icon.png')}
            style={{width: 25, height: 26, marginLeft: 3, marginTop: 3}}
          />
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
    gap: 12,
    marginVertical: 17,
  },
  addButton: {
    position: 'absolute',
    right: styleValues.CONTAINER_MARGIN_HORIZONTAL,
    width: 56,
    height: 56,
    borderRadius: 56,
    backgroundColor: colors.MAIN_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 2,
  },
});

export default ClubCalendarScreen;
