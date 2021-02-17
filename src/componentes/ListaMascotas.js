import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import BoxInfo from './BoxInfo';

class ListaMascotas extends Component{
    state = {listaMascotas:[]};

    //url = "https://givecars.herokuapp.com/"; //autos
    //url = "https://pokeapi.co/api/v2/pokemon/4"; //pokemon
    //url = "http://localhost:8080/ApiRestMascotas/webresources/mascotas";
    url = "http://192.168.0.17:3000/mascotas";//json-server
    
    // esta funcion se ejecutara al instanciar el objeto
    componentDidMount(){
        axios.get(this.url)
        .then(response =>{
            this.setState({listaMascotas: response.data});
            //console.log(response);
        })
        .catch(error => {
            console.log("Ocurrio un error **** " + error);
        });
    }

    MostrarLista = () =>{
        return this.state.listaMascotas.map(mascota => {
            return <BoxInfo key={mascota.id} mascota={mascota}></BoxInfo>
        })
    }


    render(){
        //console.log(this.state);
        return <ScrollView>{this.MostrarLista()}</ScrollView>;
    }

}


export default ListaMascotas;