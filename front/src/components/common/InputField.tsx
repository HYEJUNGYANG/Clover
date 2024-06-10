import {colors, styleValues} from '@/constants';
import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

function InputField({
  disabled = false,
  error,
  touched,
  ...props
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          // false일 때 편집 가능
          editable={!disabled}
          autoCapitalize="none"
          style={[
            styles.input,
            disabled ? styles.disabled : styles.inputStyle,
            isFocused && styles.focused,
            !!error && styles.inputError,
          ]}
          placeholderTextColor={colors.GRAY_300}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          spellCheck={false}
          autoCorrect={false}
          {...props}
        />
      </View>
      <View style={styles.errorContainer}>
        {Boolean(error) && <Text style={styles.errorText}>*{error}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 42,
    paddingHorizontal: 20,
    fontSize: styleValues.H3_FONT_SIZE,
    borderRadius: 12,
  },
  inputStyle: {
    borderColor: colors.GRAY_300,
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: colors.INVALID_BG,
    color: colors.INVALID_TEXT,
  },
  focused: {
    borderColor: colors.MAIN_GREEN,
  },
  inputError: {
    borderColor: colors.MAIN_PINK,
  },
  errorContainer: {
    minHeight: 13,
    marginTop: 5,
  },
  errorText: {
    color: colors.MAIN_PINK,
    fontSize: styleValues.H4_FONT_SIZE,
  },
});

export default InputField;
