import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Titulo() {
    return (
        <View style={Styles.Titulo}>
            <Text style={Styles.Texto} >Clique no Botão abaixo</Text>
            <Text style={Styles.Texto}> para realizar o sorteio</Text>
            <StatusBar style="auto" />
        </View>
    );
}


const Styles = StyleSheet.create({
    Titulo: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50,
        width: 250,
    },
    Texto: {
        fontSize: 20,
        color: 'blue'
    }
})