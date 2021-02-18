import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView} from 'react-native';

import Cabezera from './src/componentes/Cabezera';
import ListaMascotas from './src/componentes/ListaMascotas';


export default function App() {
  return (
    <View style={styles.container}>
    <Cabezera titulo={'Caninos Store'}/>
        <ImageBackground source={imagen} style={styles.fondo}>
          <ListaMascotas />
        </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const imagen = require("./src/images/fondo2.jpg");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82b74b',
    alignItems: 'center'
  },
  fondo:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%"
  }
});
