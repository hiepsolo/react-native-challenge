import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import Meal from '../models/meal'
import MealItem from './MealItem';

interface Props {
  listData: Meal[];
  navigation: StackNavigationProp;
}

const MealList = ({listData, navigation}: Props) => {
  const renderMealItem = ({ item }: { item: Meal }) => {
    return (
      <MealItem
        image={item.imageUrl}
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
        title={item.title}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: item.id
            }
          })
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList style={{ width: '100%'}} data={listData} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})
