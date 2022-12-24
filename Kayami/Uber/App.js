import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Title from './src/components/Title';
import Main from '../Uber/src/components/Main/index'

export default function App() {//retorna nossa interface
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Title/>
        <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
