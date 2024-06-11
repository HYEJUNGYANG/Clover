import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ClubContainer from './ClubContainer';
import {colors, styleValues} from '@/constants';

// 추후에는 데이터 받아서 보여지도록
interface MainHomeClubContainerProps {
  title: string;
  isMore?: boolean;
  handleNavigate: () => void;
}

function MainHomeClubContainer({
  title,
  isMore = false,
  handleNavigate,
}: MainHomeClubContainerProps) {
  return (
    <View style={[styles.alignContainer, {marginTop: 25}]}>
      <View
        style={{
          borderColor: '#f1f1f1',
          borderWidth: 1,
          borderRadius: 12,
        }}>
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.recentTitle}>{title}</Text>
          <ClubContainer />
          <ClubContainer />
          <ClubContainer />
          <ClubContainer />
          <ClubContainer />
        </View>
        {isMore && (
          <Pressable style={styles.moreButton} onPress={handleNavigate}>
            <Text style={styles.moreButtonText}>더보기</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 18,
    color: colors.BLACK,
  },
  moreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderTopColor: '#f1f1f1',
    borderTopWidth: 1,
  },
  moreButtonText: {
    color: colors.BLACK,
    fontSize: 12,
  },
});

export default MainHomeClubContainer;
