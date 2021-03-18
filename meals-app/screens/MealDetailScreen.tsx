import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackOptions } from 'react-navigation-stack';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import HeaderButton from '../components/HeaderButton';
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
        title='Go Back to Categories'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData: Props): NavigationStackOptions => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => {
            console.log('Mark as favorite');
          }}
        />
      </HeaderButtons>
    )
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
