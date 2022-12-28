import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Mostra(props) {
    console.log(props);
    return (
        <View style={{ flex: 1, backgroundColor: "red", width: 200 }}>
            <View >
                <Text style={campos.P1}>{props.Result1}</Text>
            </View>
            <View>
                <Text>{props.Result2}</Text>
                <Text>{props.Mensagem}</Text>
            </View>
        </View>
    )
}

const campos = StyleSheet.create({
    P1: {
        backgroundColor: 'blue',

    },
})