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

interface ClubRadioButtonProps {
  options: Option[];
  selectedOption: string | null;
  onSelect: (option: string | null) => void;
}

const deviceWidth = Dimensions.get('screen').width;

function ClubRadioButton({
  options,
  selectedOption,
  onSelect,
}: ClubRadioButtonProps) {
  const itemGap = 10;

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        horizontal={true}
        contentContainerStyle={{
          width: '100%',
          gap: itemGap,
        }}
        renderItem={({item}) => (
          <Pressable
            key={item.value}
            style={({pressed}) => [
              styles.optionContainer,
              pressed && styles.pressedOption,
              selectedOption === item.value && styles.selectedOption,
            ]}
            onPress={() => onSelect(item.value)}>
            <Text
              style={[
                styles.optionText,
                selectedOption === item.value && styles.selectedText,
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
    backgroundColor: '#F1F1F1',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pressedOption: {
    opacity: 0.6,
  },
  selectedOption: {
    backgroundColor: colors.MAIN_GREEN,
  },
  large: {
    height: 50,
  },
  medium: {
    height: 36,
    marginBottom: 10,
  },
  optionText: {
    color: '#484848',
    fontSize: styleValues.H3_FONT_SIZE,
  },
  selectedText: {
    color: colors.WHITE,
  },
});

export default ClubRadioButton;
