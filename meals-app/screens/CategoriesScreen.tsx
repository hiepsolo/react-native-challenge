import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScreenProps } from 'react-native-screens';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  screenProps: ScreenProps;
}

const CategoriesScreen = (props: Props) => {
  const renderGridItem = ({ item }: { item: Category }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: item.id
            }
          });
        }}
      />
    );
  };
  return (
      <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default CategoriesScreen;
