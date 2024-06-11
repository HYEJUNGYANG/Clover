import SignUpLayout from '@/components/auth/SignUpLayout';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SignUpNavigation} from './SignUpNameScreen';
import {colors, signUpNavigations, styleValues} from '@/constants';
import InputField from '@/components/common/InputField';
import useModal from '@/hooks/useModal';
import SignUpProfileOption from '@/components/auth/SignUpProfileOption';

interface SignUpProfileScreenProps {}

function SignUpProfileScreen({}: SignUpProfileScreenProps) {
  const navigation = useNavigation<SignUpNavigation>();
  const profileOption = useModal();
  // 마크업 위해서 임시 값 지정용도
  const isProfileImage = false;

  return (
    <>
      <SignUpLayout
        title="프로필을 등록해주세요."
        progressOrder={7}
        buttonAction={() =>
          navigation.navigate(signUpNavigations.SIGN_UP_AREA)
        }>
        <View style={styles.container}>
          <Pressable
            style={({pressed}) => [pressed && styles.imagePressed]}
            onPress={() => {
              isProfileImage && profileOption.show();
            }}>
            {/* 마크업 때는 기본으로 해두고 추후 이미지 데이터 받아올 때는 경로 지정해주기 */}
            <View style={styles.profileAlignContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  resizeMode="cover"
                  style={styles.profileImage}
                  source={
                    isProfileImage
                      ? require('@/assets/kirby-profile.jpeg')
                      : require('@/assets/default-profile.png')
                  }
                />
                <View style={styles.cameraButtonContainer}>
                  <View style={styles.cameraImageContainer}>
                    <Image
                      style={styles.cameraImage}
                      source={require('@/assets/icon/camera-icon.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>닉네임</Text>
              <InputField placeholder="닉네임" />
            </View>
          </Pressable>
        </View>
      </SignUpLayout>

      <SignUpProfileOption
        isVisible={profileOption.isVisible}
        hideOption={profileOption.hide}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  imageSelectContainer: {},
  imagePressed: {
    opacity: 0.7,
  },
  profileAlignContainer: {
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 120,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  cameraButtonContainer: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.MAIN_GREEN,
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 4},
  },
  cameraImageContainer: {
    width: 21,
    height: 18,
  },
  cameraImage: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {},
  inputText: {
    color: colors.GRAY_400,
    fontSize: styleValues.H3_FONT_SIZE,
    marginVertical: 10,
  },
});

export default SignUpProfileScreen;
