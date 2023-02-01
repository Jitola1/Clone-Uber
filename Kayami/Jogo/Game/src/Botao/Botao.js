import { StatusBar } from 'expo-status-bar';
import React, { memo, useEffect, useState } from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Mostra from '../MostraResult/MostraResultado';

export default function Botao() {
    const [Play1, setP1] = useState(null);
    const [Play2, setP2] = useState(null);
    const [mesage, setMesage] = useState("");

    const sorteiaNumerosP1P2 = () => {
        setP1(Math.floor(Math.random() * 100) + 1);
        setP2(Math.floor(Math.random() * 100) + 1);
    }

    useEffect(() => {
        console.log(
            "Valor do P1= " + Play1 +
            " Valor do P2= " + Play2
        )
        if (Play1 > Play2) {
            setMesage("Jogador 1 ganhou!!");
        } else if (Play1 < Play2) {
            setMesage("Jogador 2 ganhou!!");
        } else if (Play1 == Play2) {
            setMesage("Empate");
        }
        return setMesage;

    }, [Play1, Play2])

    return (
        <View>
            <View style={Styles.Botao}>
                <TouchableOpacity title='Sorteio' onPress={sorteiaNumerosP1P2} style={Styles.Button} >
                    <Text style={Styles.Text}>Sorteio</Text>
                </TouchableOpacity>
            </View>
            <Mostra Result1={Play1} Result2={Play2} Mensagem={mesage} />
        </View>
    );
}

const Styles = StyleSheet.create({
    Botao: {
        // color: 'black',
        // backgroundColor: 'yellow',
        // height: 50,
    },
    Button: {
        width: 150,
        height: 75,
        borderRadius: 300,
        backgroundColor: 'yellow',
        marginLeft: 0,
        textAlign: 'center',
    },
    Text: {
        paddingTop: 25
    }

})



