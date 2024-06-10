import CustomButton from '@/components/common/CustomButton';
import InputField from '@/components/common/InputField';
import {colors, signUpNavigations, styleValues} from '@/constants';
import {SignUpNavigation} from '@/screens/auth/sign-up/SignUpNameScreen';
import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface SignUpLayoutProps {
  title: string;
  progressOrder: number;
  children: ReactNode;
  buttonLabel?: '다음 단계로' | '회원가입하기';
  buttonAction: () => void;
}

function SignUpLayout({
  title,
  progressOrder,
  children,
  buttonLabel = '다음 단계로',
  buttonAction,
}: SignUpLayoutProps) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SignUpNavigation>();

  return (
    <View style={styles.container}>
      <View style={styles.alignContainer}>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBar,
              {width: `${(100 / 8) * progressOrder}%`},
            ]}
          />
        </View>
        <View style={styles.contentsContainer}>
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
        <CustomButton
          label={buttonLabel}
          style={[
            {position: 'absolute', bottom: insets.bottom + 20},
            buttonLabel === '회원가입하기' && {
              backgroundColor: colors.MAIN_PINK,
            },
          ]}
          onPress={buttonAction}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alignContainer: {
    flex: 1,
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  progressBarContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 3,
    borderRadius: 12,
    backgroundColor: colors.GRAY_100,
  },
  progressBar: {
    height: 3,
    borderRadius: 12,
    backgroundColor: colors.MAIN_GREEN,
  },
  contentsContainer: {
    marginTop: 65,
  },
  title: {
    color: colors.BLACK,
    fontSize: styleValues.H1_FONT_SIZE,
    fontWeight: styleValues.H1_FONT_WEIGHT,
  },
});

export default SignUpLayout;
