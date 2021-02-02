import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
    return (
        <View style={styles.container}>
            <Text>{outputText}</Text>
            <Button title='Change Text' onPress={() => setOutputText('Text changed')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
