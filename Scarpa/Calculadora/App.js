
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import Title from './src/components/Title/';


export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Title/>
        <Main/>
      </View>
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
