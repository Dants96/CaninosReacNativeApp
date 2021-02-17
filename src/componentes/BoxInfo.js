import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
import Boton from './Boton';

const BoxInfo = (props) => {
    return(
        <Item>
            <ItemSeccion>
                <View>
                    <Text>
                        <Text>{props.mascota.raza}</Text>
                        <Text>{props.mascota.nombre}</Text>
                    </Text>
                </View>
            </ItemSeccion>
            <ItemSeccion>
                    <Image style={styles.estiloImagen} source={{uri: props.mascota.imagen}} />
            </ItemSeccion>
            <ItemSeccion>
                <Boton botonPresionado={() => {Linking.openURL(props.mascota.información)}} />
            </ItemSeccion>
        </Item>
    );
};

const styles = {
    estiloImagen:{
        height: 300,
        width: 300
    }
};

export default BoxInfo;