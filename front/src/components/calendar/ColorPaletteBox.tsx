import {colorPalettes, colors, styleValues} from '@/constants';
import useCalendarColorStore from '@/store/useCalendarColorStore';
import SwipeModal, {
  SwipeModalPublicMethods,
} from '@birdwingo/react-native-swipe-modal';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Image} from 'react-native';
import {
  Dimensions,
  FlatList,
  GestureResponderEvent,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export interface ColorPaletteBoxProps {
  show: () => void;
  hide: () => void;
}

const deviceWidth = Dimensions.get('window').width;

const ColorPaletteBox = forwardRef<ColorPaletteBoxProps>((props, ref) => {
  const {paletteColor, setPaletteColor} = useCalendarColorStore();
  //   const [paletteColor, setPaletteColor] = useState<string>(
  //     colorPalettes[colorPalettes.length - 1],
  //   );
  const modalRef = useRef<SwipeModalPublicMethods>(null);
  const showModal = () => modalRef.current?.show();
  const hideModal = () => modalRef.current?.hide();

  useImperativeHandle(ref, () => ({
    show: showModal,
    hide: hideModal,
  }));

  const handlePaletteColor = (color: string) => {
    setPaletteColor(color);
    hideModal();
  };

  //   useEffect(() => {
  //     paletteColor === null &&
  //       setPaletteColor(colorPalettes[colorPalettes.length - 1]);
  //   }, []);

  return (
    <SwipeModal
      ref={modalRef}
      bg={colors.WHITE}
      barColor={colors.GRAY_300}
      defaultHeight={400}
      style={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}
      maxHeight="max">
      <SafeAreaView style={styles.container}>
        <View style={styles.alignContainer}>
          <Text style={styles.title}>팔레트 선택</Text>
        </View>
        <View style={styles.paletteContainer}>
          <FlatList
            data={Array.from({length: colorPalettes.length}, (_, i) => ({
              id: i,
              color: colorPalettes[i],
              paletteColor,
            }))}
            numColumns={4}
            columnWrapperStyle={{
              gap:
                (deviceWidth -
                  38 * 4 -
                  styleValues.CONTAINER_MARGIN_HORIZONTAL * 4) /
                3,
              marginBottom: 33,
            }}
            renderItem={({item}) => (
              <Pressable
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 38,
                  backgroundColor: item.color,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => handlePaletteColor(item.color)}>
                {item.paletteColor === item.color && (
                  <Image
                    resizeMode="contain"
                    source={require('@/assets/icon/calendar/check-icon.png')}
                    style={{width: 17.19, height: 10.86}}
                  />
                )}
              </Pressable>
            )}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </SafeAreaView>
    </SwipeModal>
  );
});

const styles = StyleSheet.create({
  blurAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {},
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  title: {
    color: colors.BLACK,
    fontSize: styleValues.H1_FONT_SIZE,
    fontWeight: '600',
    marginTop: 15,
  },
  paletteContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL * 2,
    marginTop: 30,
  },
});

export default ColorPaletteBox;
