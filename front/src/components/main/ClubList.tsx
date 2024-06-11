import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ClubContainer from './ClubContainer';

interface ClubListProps {}

function ClubList({}: ClubListProps) {
  return (
    // 이후에 데이터 받을 때는 FlatList 사용하기
    <>
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
      <ClubContainer />
    </>
  );
}

const styles = StyleSheet.create({});

export default ClubList;
