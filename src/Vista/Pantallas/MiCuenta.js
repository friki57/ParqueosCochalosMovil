import React, { Component } from "react";
import { View,  Text, Alert, StyleSheet } from 'react-native';

import ButtonLogin from '../Componentes/Formulario/Button';
import Logo from '../Componentes/Formulario/Logo';

import Images from "./../../Modelo/Img";
import Colors from '../../Modelo/Colors';

export default class MiCuenta extends Component {
  constructor(props){
    super(props)
    this.cuenta = this.cuenta.bind(this)
  }
  cuenta(){
    console.log(global.usuario)
    if(global.usuario!=undefined){
      return(

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Logo style={stylesLoginScreen.logo} imagen = {Images.IconoUsuario}/>
          <Text style = {{width: 250, fontSize: 20, margin: 10}}>
            Nombre: {global.usuario.nombre + " " + global.usuario.apellido}</Text>
          <Text style = {{width: 250, fontSize: 20, margin: 10}}>
            Matrícula: {global.usuario.placa}</Text>
          <Text style = {{width: 250, fontSize: 20, margin: 10}}>
            Saldo actual: {global.usuario.saldo}</Text>

          <ButtonLogin
            onPress={()=>{console.log("Modificar Tiempos")}}
            titleButton={"Cerrar Sesión"}>
          </ButtonLogin>
        </View>
      )
    }
    else{
      return(

        <View><Text>Inicie sesion por favor</Text></View>
      )
    }
  }
  render()
  {
    console.disableYellowBox = true;
    return (
      <>
        {this.cuenta()}
      </>  
    );

  }
}

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.azul,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
    },
});
