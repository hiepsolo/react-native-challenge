import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackOptions } from 'react-navigation-stack';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

interface Props {
  navigation: StackNavigationProp;
  screenProps: ScreenProps;
}

const MealDetailScreen = (props: Props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (
  navigationData: Props
): NavigationStackOptions => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title,
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
