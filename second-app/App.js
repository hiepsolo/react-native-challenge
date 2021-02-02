import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (goalTitle) => {
        setCourseGoals((currentGoals) => {
            return [...currentGoals, { id: Math.random().toString(), value: goalTitle }];
        });
        setIsAddMode(false);
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.screen}>
            <Button title='Add New Goal' onPress={() => setIsAddMode(true)}></Button>
            <GoalInput 
            onCancel={cancelGoalAdditionHandler}
            visible={isAddMode} 
            onAddGoal={addGoalHandler} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={(itemData) => <GoalItem 
                  id={itemData.item.id} 
                  onDelete={removeGoalHandler} 
                  title={itemData.item.value} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
