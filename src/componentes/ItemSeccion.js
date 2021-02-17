import React from 'react';
import {View, Text} from 'react-native';

const ItemSeccion = (props) =>{
    return <View>{props.children}</View>
};

/*
const styles={
    estiloContenedor:{
        flexDirection:"column",
        borderWidth:.5,
        borderColor: "#686868"
    }
};
*/
export default ItemSeccion;