import React from 'react';
import {View, Text} from 'react-native';

const Item = (props) =>{
    return <View>{props.children}</View>
};

/*
const styles={
    estiloContenedor:{
        flexDirection:"column",

    }
};
*/
export default Item;