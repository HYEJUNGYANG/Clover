import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  LayoutChangeEvent,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import HeaderBackButton from '../common/HeaderBackButton';
import {colors, styleValues} from '@/constants';

interface SearchHeaderProps {
  isClub?: boolean;
  ClubName?: string;
}

function SearchHeader({isClub = false, ClubName}: SearchHeaderProps) {
  const isAndroid = Platform.OS === 'android';
  const inputRef = useRef<TextInput>(null);
  const [clubWidth, setClubWidth] = useState(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setClubWidth(width);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <SafeAreaView style={[styles.container, isAndroid && {marginTop: 10}]}>
      <HeaderBackButton />
      <View style={styles.inputContainer}>
        {isClub && (
          <View
            style={[
              styles.clubSearchContainer,
              isAndroid && {paddingVertical: 4},
            ]}
            onLayout={handleLayout}>
            <Text>클로버</Text>
          </View>
        )}
        <TextInput
          placeholder="검색어를 입력해주세요"
          style={[
            styles.input,
            isAndroid && {paddingVertical: 5},
            Boolean(clubWidth) && {paddingLeft: clubWidth + 10},
          ]}
          ref={inputRef}
          placeholderTextColor={colors.INVALID_TEXT}
          autoCapitalize="none"
        />
        <Image
          source={require('@/assets/icon/input-search-icon.png')}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clubSearchContainer: {
    zIndex: 1,
    position: 'absolute',
    left: 3,
    borderRadius: 9,
    backgroundColor: colors.WHITE,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderColor: colors.BLACK,
    borderWidth: 1,
  },
  inputContainer: {
    flex: 1,
    marginRight: styleValues.CONTAINER_MARGIN_HORIZONTAL,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#F5F5F5',
    fontSize: styleValues.H3_FONT_SIZE,
    color: colors.BLACK,
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingRight: 40,
    borderRadius: 9,
  },
  image: {
    position: 'absolute',
    right: 15,
    width: 13,
    height: 13,
  },
});

export default SearchHeader;
