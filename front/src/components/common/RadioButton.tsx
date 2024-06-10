import {colors, styleValues} from '@/constants';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

type Option = {
  label: string;
  value: string;
};

interface RadioButtonProps {
  options: Option[];
  selectedOption: string | null;
  size?: 'large' | 'medium';
  onSelect: (option: string | null) => void;
}

const deviceWidth = Dimensions.get('screen').width;

function RadioButton({
  options,
  size = 'large',
  selectedOption,
  onSelect,
}: RadioButtonProps) {
  const columnNum = size === 'large' ? 2 : 5;
  const itemGap = size === 'large' ? 33 : 10;

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        columnWrapperStyle={[
          size === 'large' && {justifyContent: 'space-between'},
          {gap: itemGap},
        ]}
        numColumns={columnNum}
        renderItem={({item}) => (
          <Pressable
            key={item.value}
            style={({pressed}) => [
              {
                width:
                  (deviceWidth -
                    (styleValues.CONTAINER_MARGIN_HORIZONTAL * 2 +
                      itemGap * (size === 'large' ? 1 : columnNum))) /
                  columnNum,
              },
              styles.optionContainer,
              styles[size],
              pressed && styles.pressedOption,
              selectedOption === item.value && styles.selectedOption,
            ]}
            onPress={() => onSelect(item.value)}>
            <Text
              style={[
                styles.optionText,
                selectedOption === item.value && styles.selectedText,
                size === 'medium' && {fontSize: 14},
              ]}>
              {item.label}
            </Text>
          </Pressable>
        )}
        keyExtractor={item => item.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  optionContainer: {
    borderColor: colors.INVALID_TEXT,
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressedOption: {
    opacity: 0.6,
  },
  selectedOption: {
    borderColor: colors.MAIN_GREEN,
  },
  large: {
    height: 50,
  },
  medium: {
    height: 36,
    marginBottom: 10,
  },
  optionText: {
    color: colors.INVALID_TEXT,
    fontSize: styleValues.H1_FONT_SIZE,
    fontWeight: styleValues.H1_FONT_WEIGHT,
  },
  selectedText: {
    color: colors.MAIN_GREEN,
  },
});

export default RadioButton;
