import React, { Component } from "react";
import { View,  Text, Alert, StyleSheet, ImageBackground } from 'react-native';

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
          <ImageBackground source={Images.textura2} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'repeat'}}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
              <Logo style={stylesLoginScreen.logo} imagen = {Images.IconoUsuario}/>
              <View style={stylesLoginScreen.form}>
                <Text style = {{width: 250, fontSize: 20, margin: 10}}>
                Nombre: {global.usuario.nombre + " " + global.usuario.apellido}</Text>
                <Text style = {{width: 250, fontSize: 20, margin: 10}}>
                Matrícula: {global.usuario.placa}</Text>
                <Text style = {{width: 250, fontSize: 20, margin: 10}}>
                Saldo actual: {global.usuario.saldo}</Text>
              </View>

            </View>
          </ImageBackground>
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
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '80%',
        backgroundColor:"#aaaa"
    },
});
