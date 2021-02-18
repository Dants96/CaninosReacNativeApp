// Vista principa de la aplicacion.

//Componente para que la aplicacion este de fondo en la barra de notificaciones.
import { StatusBar } from 'expo-status-bar';  
import React from 'react';
import { StyleSheet, ImageBackground, View} from 'react-native';

// Componente Header de la aplicacion.
import Cabezera from './src/componentes/Cabezera';
// Componenete que lista las mascotas
import ListaMascotas from './src/componentes/ListaMascotas';


// Vista principal
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

// Imagen de fondo de la vista principal
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
