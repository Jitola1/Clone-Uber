import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Mostra(props) {
    console.log(props);
    return (
        <View style={{ backgroundColor: "red", width: 150, height: 300 }}>
            <View style={campos.P1}>
                <Text style={campos.P1}>P1: {props.Result1}</Text>
            </View>
            <View style={campos.Message}>
                <Text>{props.Mensagem}</Text>
            </View>
            <View style={campos.P2}>
                <Text>P2: {props.Result2}</Text>
            </View>
        </View>
    )
}

const campos = StyleSheet.create({
    P1: {
        flex: 1,
        width: 150,
        maxHeight: 20,
        backgroundColor: 'blue',
        alignContent: 'center',
        textAlign: 'center'
    },
    Message: {
        paddingTop: 20,
        alignContent: 'center',
        textAlign: 'center'
    },
    P2: {
        paddingTop: 20,
        alignContent: 'center',
        textAlign: 'center'
    }
})