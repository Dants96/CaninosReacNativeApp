import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Item from './Item'; 
import ItemSeccion from './ItemSeccion';
import Boton from './Boton';

/**
 * extrae y secciona para mostrada toda la infomrmacion de una mascota de porps, para ser mostrada.
 * @param {*} props datos de una mascota siguiendo el modelo de la tabla mascotas.
 * @return {Item} Componente Item con todos los datos de una mascota.
 */
const BoxInfo = (props) => {
    return(
        <Item>
            <ItemSeccion>
                <Text style={styles.textBold, styles.estiloTitulo}>Mascota No {props.mascota.id}</Text>
            </ItemSeccion>            
            <ItemSeccion>
                    <Image style={styles.estiloImagen} source={{uri: props.mascota.imagen}} />
            </ItemSeccion>
            <ItemSeccion>
                <View style={styles.estiloDesc}>
                        <Text style={styles.estiloTextoDesc}><Text style={styles.textBold}>Raza: </Text>{props.mascota.raza}</Text>
                        <Text style={styles.estiloTextoDesc}><Text style={styles.textBold}>Nombre: </Text>{props.mascota.nombre}</Text>
                </View>
            </ItemSeccion>
            <ItemSeccion>
                <Boton botonPresionado={() => {Linking.openURL(props.mascota.información)}}>Mas Información</Boton>
            </ItemSeccion>
            <ItemSeccion>
                <Boton botonPresionado={() => {console.log("adoptaron a " + props.mascota.nombre)}}>Adoptar</Boton>
            </ItemSeccion>
        </Item>
    );
};

const styles = {
    estiloTitulo:{
        alignSelf: "center",
        fontSize: 25
    },
    estiloImagen:{
        alignSelf: "center",
        height: 300,
        width: 300,
        margin:10,
    },
    estiloDesc:{
        alignSelf: 'flex-start',
        margin: 10,
        marginLeft: 30,
    },
    estiloTextoDesc:{
        fontSize:20
    },
    estiloBoton:{
        alignSelf: "center"
    },
    textBold:{
        fontWeight: "bold",
    }

    
};

export default BoxInfo;