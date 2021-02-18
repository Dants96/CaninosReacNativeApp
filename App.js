import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cabezera from './src/componentes/Cabezera';
import ListaMascotas from './src/componentes/ListaMascotas';



export default function App() {
  return (
    <View style={styles.container}>
      <Cabezera titulo={'Caninos Store'}/>
      <ListaMascotas />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82b74b',
    alignItems: 'center'
  },
});
