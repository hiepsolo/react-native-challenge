import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackOptions } from 'react-navigation-stack';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Category from '../models/category';
import Meal from '../models/meal';

interface Props {
  navigation: StackNavigationProp;
  screenProps: ScreenProps;
}

const CategoryMealsScreen = (props: Props) => {
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
  return (
    <MealList navigation={props.navigation} listData={displayedMeals}/>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData: any): NavigationStackOptions => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory: Category | undefined = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory?.title
  };
};

const styles = StyleSheet.create({
  
});
export default CategoryMealsScreen;
