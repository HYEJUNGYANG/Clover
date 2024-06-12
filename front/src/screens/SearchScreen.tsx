import {MainSearchNavigation} from '@/components/common/HeaderRight';
import {colors, mainSearchNavigations, styleValues} from '@/constants';
import {categoryList} from '@/utils/category';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface SearchScreenProps {
  isClub?: boolean;
}

const deviceWidth = Dimensions.get('screen').width;

function SearchScreen({isClub = false}: SearchScreenProps) {
  const navigation = useNavigation<MainSearchNavigation>();
  const isQuery = true; // 임시 설정 이후 아예 값받아와서 비교

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alignContainer}>
        <View style={styles.queryListContainer}>
          <View style={styles.recentQueryAndDelete}>
            <Text style={styles.recentQuery}>최근 검색어</Text>
            {isQuery && (
              <Pressable
                style={({pressed}) => ({opacity: 0.6})}
                onPress={() => console.log('delete')}>
                <Text style={styles.allDelete}>전체 삭제</Text>
              </Pressable>
            )}
          </View>
          <View>
            {isQuery ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.queryScrollContainer}>
                <Pressable style={styles.queryContainer}>
                  <Text style={styles.queryText}>운동</Text>
                  <Image
                    source={require('@/assets/icon/close-button-icon.png')}
                    style={{width: 7.4, height: 7.4}}
                  />
                </Pressable>
                <Pressable style={styles.queryContainer}>
                  <Text style={styles.queryText}>운동</Text>
                  <Image
                    source={require('@/assets/icon/close-button-icon.png')}
                    style={{width: 7.4, height: 7.4}}
                  />
                </Pressable>
                <Pressable style={styles.queryContainer}>
                  <Text style={styles.queryText}>운동</Text>
                  <Image
                    source={require('@/assets/icon/close-button-icon.png')}
                    style={{width: 7.4, height: 7.4}}
                  />
                </Pressable>
                <Pressable style={styles.queryContainer}>
                  <Text style={styles.queryText}>운동</Text>
                  <Image
                    source={require('@/assets/icon/close-button-icon.png')}
                    style={{width: 7.4, height: 7.4}}
                  />
                </Pressable>
                <Pressable style={styles.queryContainer}>
                  <Text style={styles.queryText}>운동</Text>
                  <Image
                    source={require('@/assets/icon/close-button-icon.png')}
                    style={{width: 7.4, height: 7.4}}
                  />
                </Pressable>
                <Pressable style={styles.queryContainer}>
                  <Text style={styles.queryText}>운동</Text>
                  <Image
                    source={require('@/assets/icon/close-button-icon.png')}
                    style={{width: 7.4, height: 7.4}}
                  />
                </Pressable>
                <Pressable style={styles.queryContainer}>
                  <Text style={styles.queryText}>운동</Text>
                  <Image
                    source={require('@/assets/icon/close-button-icon.png')}
                    style={{width: 7.4, height: 7.4}}
                  />
                </Pressable>
                <Pressable style={styles.queryContainer}>
                  <Text style={styles.queryText}>운동</Text>
                  <Image
                    source={require('@/assets/icon/close-button-icon.png')}
                    style={{width: 7.4, height: 7.4}}
                  />
                </Pressable>
              </ScrollView>
            ) : (
              <Text style={styles.queryNone}>최근 검색어가 없습니다.</Text>
            )}
          </View>
        </View>
        {isClub || (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>카테고리</Text>
            <FlatList
              data={categoryList}
              columnWrapperStyle={{
                gap: (deviceWidth - 55 * 4) / 4,
                marginBottom: 20,
              }}
              renderItem={({item}) => (
                <Pressable style={{alignItems: 'center', gap: 8}}>
                  <View
                    style={{
                      width: 55,
                      height: 55,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#F2F2F2',
                      borderRadius: 12,
                    }}>
                    <Image
                      source={item.source}
                      style={{width: item.width, height: item.height}}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: styleValues.H3_FONT_SIZE,
                      color: colors.BLACK,
                      fontWeight: '500',
                    }}>
                    {item.name}
                  </Text>
                </Pressable>
              )}
              numColumns={4}
              keyExtractor={item => item.name}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  alignContainer: {
    marginHorizontal: styleValues.CONTAINER_MARGIN_HORIZONTAL,
  },
  queryListContainer: {
    marginTop: 22,
  },
  recentQueryAndDelete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentQuery: {
    color: colors.BLACK,
    fontSize: styleValues.H1_FONT_SIZE,
    fontWeight: styleValues.H1_FONT_WEIGHT,
  },
  allDelete: {
    color: colors.GRAY_700,
    fontSize: styleValues.H3_FONT_SIZE,
  },
  queryNone: {
    fontSize: styleValues.H3_FONT_SIZE,
    color: colors.INVALID_TEXT,
    marginTop: 13,
    marginBottom: 14,
  },
  queryScrollContainer: {
    marginTop: 10,
  },
  queryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#E9E9E9',
    padding: 10,
    borderRadius: 16.5,
    marginRight: 10,
  },
  queryText: {
    fontSize: styleValues.H3_FONT_SIZE,
  },
  categoryContainer: {
    marginTop: 22,
  },
  categoryText: {
    color: colors.BLACK,
    fontSize: styleValues.H1_FONT_SIZE,
    fontWeight: styleValues.H1_FONT_WEIGHT,
    marginBottom: 20,
  },
});

export default SearchScreen;
