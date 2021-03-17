import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackOptions } from 'react-navigation-stack';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Category from '../models/category';
import Meal from '../models/meal';

interface Props {
  navigation: StackNavigationProp;
  screenProps: ScreenProps;
}

const CategoryMealsScreen = (props: Props) => {
  const renderMealItem = ({ item }: { item: Meal }) => {
    return (
      <MealItem
        image={item.imageUrl}
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
        title={item.title}
        onSelectMeal={() => {}}
      />
    );
  };
  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
  return (
    <View style={styles.screen}>
      <FlatList style={{ width: '100%'}} data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} />
    </View>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default CategoryMealsScreen;
