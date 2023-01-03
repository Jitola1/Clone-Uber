import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Mostra from '../MostraResult/MostraResultado';

export default function Botao() {
    const [Play1, setP1] = useState(null);
    const [Play2, setP2] = useState(null);
    const [mesage, setMesage] = useState("");

    function P1() {
        let sorteio1 = Math.floor(Math.random() * 100) + 1;
        setP1(sorteio1);
        console.log(Play1);
        return;
    }

    function P2() {
        let sorteio2 = Math.floor(Math.random() * 100) + 1;
        setP2(sorteio2);
        console.log(Play2);
        return;
    }

    function ChamaTodasFunction() {
        P1();
        P2();
        if (Play1 > Play2) {
            setMesage("Jogador 1 ganhou!!");
        } else if (Play1 < Play2) {
            setMesage("Jogador 2 ganhou!!");
        } else {
            setMesage("Empate");
        }
        return;
        console.log(mesage);
    }

    return (
        <View>
            <View style={Styles.Botao}>
                <TouchableOpacity title='Sorteio' onPress={() => ChamaTodasFunction()} style={Styles.Button} >
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
        width: 75,
        height: 75,
        borderRadius: 0,
        backgroundColor: 'yellow',
        marginLeft: 45,
        textAlign: 'center',
    },
    Text: {
        paddingTop: 25
    }

})



