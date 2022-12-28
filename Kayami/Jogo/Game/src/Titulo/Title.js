import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function Titulo() {
    return (
        <View>
            <Text>Clique no Botão abaixo para realizar o sorteio</Text>
            <StatusBar style="auto" />
        </View>
    );
}
