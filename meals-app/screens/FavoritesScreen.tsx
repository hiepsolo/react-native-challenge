import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Favorites Screen</Text>
        </View>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
