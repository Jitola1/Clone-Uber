import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Title from './src/Titulo/Title.js';
import Botao from './src/Botao/Botao.js';
export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Botao />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


