import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

interface Props {
  navigation: StackNavigationProp;
}

const FavoritesScreen = ({navigation}: Props) => {
  const favMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (
      <MealList listData={favMeal} navigation={navigation}/>
    );
};

export default FavoritesScreen;
