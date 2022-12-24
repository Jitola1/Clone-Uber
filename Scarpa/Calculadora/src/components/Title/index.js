import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Title() {
  return (
    <View>
      <Text style={styles.texto}>Calculadora</Text>
    </View>
  );
  
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 50,
      color: '#006400'
    },
  });
