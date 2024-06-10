import HeaderBackButton from '@/components/common/HeaderBackButton';
import {colors, signUpNavigations} from '@/constants';
import SignUpAreaScreen from '@/screens/auth/sign-up/SignUpAreaScreen';
import SignUpBirthScreen from '@/screens/auth/sign-up/SignUpBirthScreen';
import SignUpEmailScreen from '@/screens/auth/sign-up/SignUpEmailScreen';
import SignUpGenderScreen from '@/screens/auth/sign-up/SignUpGenderScreen';
import SignUpNameScreen from '@/screens/auth/sign-up/SignUpNameScreen';
import SignUpPasswordScreen from '@/screens/auth/sign-up/SignUpPasswordScreen';
import SignUpProfileScreen from '@/screens/auth/sign-up/SignUpProfileScreen';
import SignUpTelScreen from '@/screens/auth/sign-up/SignUpTelScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type SignUpStackParamList = {
  [signUpNavigations.SIGN_UP_NAME]: undefined;
  [signUpNavigations.SIGN_UP_GENDER]: undefined;
  [signUpNavigations.SIGN_UP_TEL]: undefined;
  [signUpNavigations.SIGN_UP_EMAIL]: undefined;
  [signUpNavigations.SIGN_UP_PASSWORD]: undefined;
  [signUpNavigations.SIGN_UP_BIRTH]: undefined;
  [signUpNavigations.SIGN_UP_PROFILE]: undefined;
  [signUpNavigations.SIGN_UP_AREA]: undefined;
};

const Stack = createStackNavigator<SignUpStackParamList>();

function SignUpStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '회원가입',
        cardStyle: {
          backgroundColor: colors.WHITE,
        },
        headerLeft: () => <HeaderBackButton />,
        headerShadowVisible: false,
        animationEnabled: false,
      }}
      initialRouteName={signUpNavigations.SIGN_UP_EMAIL}>
      <Stack.Screen
        name={signUpNavigations.SIGN_UP_EMAIL}
        component={SignUpEmailScreen}
      />
      <Stack.Screen
        name={signUpNavigations.SIGN_UP_NAME}
        component={SignUpNameScreen}
      />
      <Stack.Screen
        name={signUpNavigations.SIGN_UP_GENDER}
        component={SignUpGenderScreen}
      />
      <Stack.Screen
        name={signUpNavigations.SIGN_UP_TEL}
        component={SignUpTelScreen}
      />
      <Stack.Screen
        name={signUpNavigations.SIGN_UP_PASSWORD}
        component={SignUpPasswordScreen}
      />
      <Stack.Screen
        name={signUpNavigations.SIGN_UP_BIRTH}
        component={SignUpBirthScreen}
      />
      <Stack.Screen
        name={signUpNavigations.SIGN_UP_PROFILE}
        component={SignUpProfileScreen}
      />
      <Stack.Screen
        name={signUpNavigations.SIGN_UP_AREA}
        component={SignUpAreaScreen}
      />
    </Stack.Navigator>
  );
}

export default SignUpStackNavigator;
