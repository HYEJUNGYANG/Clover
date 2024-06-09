import {colors} from '@/constants';
import React, {ReactNode} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'medium';
  inValid?: boolean; // 버튼 비활성화 여부 (true -> 비활성화 / false -> 활성화[default])
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
}

function CustomButton({
  label,
  variant = 'filled',
  size = 'medium',
  inValid = false,
  style = null,
  textStyle = null,
  icon = null,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      disabled={inValid}
      style={({pressed}) => [
        styles.container,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        inValid && styles.inValid,
        style,
      ]}
      {...props}>
      <View style={styles[size]}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inValid: {
    backgroundColor: colors.INVALID_BG,
    color: colors.INVALID_TEXT,
  },
  filled: {
    backgroundColor: colors.MAIN_GREEN,
  },
  outlined: {
    borderColor: colors.MAIN_GREEN,
    borderWidth: 1,
  },
  filledPressed: {
    backgroundColor: colors.MAIN_GREEN,
    opacity: 0.7,
  },
  outlinedPressed: {
    borderColor: colors.MAIN_GREEN,
    borderWidth: 1,
    opacity: 0.7,
  },
  large: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  medium: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.MAIN_GREEN,
  },
});

export default CustomButton;
