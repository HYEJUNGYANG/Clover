import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {CompoundOption} from '../common/CompoundOptions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SignUpStackParamList} from '@/navigations/stack/SignUpStackNavigator';

interface SignUpProfileOptionProps {
  isVisible: boolean;
  hideOption: () => void;
}

function SignUpProfileOption({
  isVisible,
  hideOption,
}: SignUpProfileOptionProps) {
  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.Background>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={() => {}}>
            기본 아바타로 변경
          </CompoundOption.Button>
          <CompoundOption.Divider />
          <CompoundOption.Button onPress={() => {}}>
            앨범에서 사진 선택
          </CompoundOption.Button>
        </CompoundOption.Container>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={hideOption}>
            취소
          </CompoundOption.Button>
        </CompoundOption.Container>
      </CompoundOption.Background>
    </CompoundOption>
  );
}

const styles = StyleSheet.create({});

export default SignUpProfileOption;
