import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string;
    color: string;
    onSelect: () => void;
}

const CategoryGridTile = ({ title, color, onSelect }: Props) => {
    let TouchableCmp: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
      <View style={styles.gridItem}>
        <TouchableCmp style={{flex: 1}} onPress={onSelect}>
            <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
                <Text style={styles.title} numberOfLines={2}>
                    {title}
                </Text>
            </View>
        </TouchableCmp>
      </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right'
    }
});
