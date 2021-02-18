import React from 'react';
import {View, Text} from 'react-native';

const Cabezera = (props) => {
    const {estiloTexto, estiloContenedor} = styles;
    return(
        <View style={estiloContenedor}>
            <Text style={estiloTexto}>{props.titulo}</Text>
        </View>
    );

};

const styles = {
    estiloTexto:{
        fontSize:25,
        color: "#fff",
        fontWeight: "bold"
    },
    estiloContenedor:{
        width:"100%",
        backgroundColor: "#3e4444",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        
    }
}

export default Cabezera;