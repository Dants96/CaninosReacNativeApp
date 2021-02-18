import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Boton = (props) =>{
    const {estiloTexto, estiloBoton} = styles;

    return (
        <TouchableOpacity style={estiloBoton} onPress={props.botonPresionado}>
                <Text style={estiloTexto} >{props.children}</Text>
        </TouchableOpacity>
    );
};


const styles={
    estiloTexto:{
        fontSize: 18,
        fontWeight: '400',
        paddingBottom: 3,
        color: 'white'
    },
    estiloBoton:{
        alignSelf: 'center',
        backgroundColor: '#3e4444',
        alignItems: 'center',
        borderWidth: .5,
        paddingTop: 2,
        marginTop:10,
        marginLeft:7,
        marginRight: 7,
        marginBotton:15,
        paddingLeft:15,
        paddingRight: 15,
        borderRadius: 10
    }
}

export default Boton;