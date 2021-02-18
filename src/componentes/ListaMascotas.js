import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios'; //libreria para hacer peticiones al servidor REST
import BoxInfo from './BoxInfo'; 


/**
 * Componente que muesta una lista con toda la imforamcion de cada una de 
 * las mascotas.
 * @property {Array} state arreglo que contendra toda la informacion obtenida del servidor REST.
 * @property {string} url  URL del servicio REST en json-server.
 */
class ListaMascotas extends Component{
    state = {listaMascotas:[]}; 
    
    url = "http://192.168.0.17:3000/mascotas"; 
    
    /**
     * traer el contenido de la tabla mascotas, consumiendo el metodo get
     * del Servicio REST por medio de axios y lo guarda en el atributo state.
     */
    componentDidMount(){
        axios.get(this.url)
        .then(response =>{
            this.setState({listaMascotas: response.data});
        })
        .catch(error => {
            console.log("Ocurrio un error **** " + error + " ****");
        });
    }

    /**
     * crea un componente BoxInfo por cada uno de los recursos obtenidos de la tabla mascotas.
     * @returns {Array}  arreglo de componentes BoxInfo.
     */
    MostrarLista = () =>{
        return this.state.listaMascotas.map(mascota => {
            return <BoxInfo key={mascota.id} mascota={mascota}></BoxInfo>
        })
    }

    /**
     * Pone un agreeglo de componentes BoxInfo dentro de un ScrollView.
     * @return {ScrollView} Componente ScrollView con componentes BoxInfo.
     */
    render(){
        //console.log(this.state);
        return <ScrollView style={styles.scrolStyle}>{this.MostrarLista()}</ScrollView>;
    }

}

const styles ={
    scrolStyle:{
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
    }
}


export default ListaMascotas;