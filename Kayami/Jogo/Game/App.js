import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Title from './src/Titulo/Title.js';
import Botao from './src/Botao/Botao.js';
export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Title />
      </View>
      <View style={styles.Botao}>
        <Botao />
      </View>

    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Botao: {
    backgroundColor: 'red',
    margin: 35,
    width: 150,
    marginLeft: 60,
    height: 300
  },
});


