import {colors, mainSearchNavigations} from '@/constants';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import SearchScreen from '@/screens/SearchScreen';
import MainTabNavigator from '../tab/MainTabNavigator';
import SearchHeader from '@/components/main/SearchHeader';

export type MainSearchStackParamList = {
  [mainSearchNavigations.MAIN_TAB]: undefined;
  [mainSearchNavigations.SEARCH]: undefined;
};

const Stack = createStackNavigator<MainSearchStackParamList>();

function MainSearchStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={mainSearchNavigations.MAIN_TAB}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.WHITE,
        },
      }}>
      <Stack.Screen
        name={mainSearchNavigations.MAIN_TAB}
        component={MainTabNavigator}
        options={{
          headerTitle: ' ',
        }}
      />
      <Stack.Screen
        name={mainSearchNavigations.SEARCH}
        component={SearchScreen}
        options={{
          headerShown: true,
          header: () => <SearchHeader />,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default MainSearchStackNavigator;
