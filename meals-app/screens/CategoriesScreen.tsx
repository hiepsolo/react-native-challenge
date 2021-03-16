import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
        </View>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
