import React from 'react';
import {View, Text} from 'react-native';

/**
 * Componenten que da una estructura general para mostrar la informacion de una mascota.
 * @return {View} View con estilo de Item
 */
const Item = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};


const styles={
    estiloContenedor:{
        flexDirection:"column",
        marginTop: 20,
        marginBotton: 20,
        backgroundColor: "#ebebeb",
        paddingTop:15,
        paddingBottom:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 5,     
        borderRadius: 10    
    }
};

export default Item;