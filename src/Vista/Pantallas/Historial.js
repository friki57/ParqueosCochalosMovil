import React, { Component } from "react";
import { View,  Text, Alert, StyleSheet } from 'react-native';

import ButtonLogin from '../Componentes/Formulario/Button';
import Logo from '../Componentes/Formulario/Logo';

import Images from "./../../Modelo/Img";
import Colors from '../../Modelo/Colors';

export default class MiCuenta extends Component {
  render()
  {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Logo style={stylesLoginScreen.logo} imagen = {Images.IconoTelefono}/>
        <Text style = {{width: 250, fontSize: 26, marginBottom: 30, marginTop:30}}>
          Historial</Text>
        <Text style = {{width: 250, fontSize: 16, margin: 0}}>
          Estacionado en la calle: Venezuela entre Lanza y Antezana.
          Desde las 17:00 hasta las 18:30 el 4 de mayo de 2020
          se gastó 3 Bs</Text>
        <Text style = {{width: 250, fontSize: 16, margin: 50}}>
          Estacionado en la calle: San Martin entre Jordan y Antezana.
          Desde las 12:00 hasta las 13:00 el 4 de mayo de 2020
          se gastó 2 Bs</Text>
        <Text style = {{width: 250, fontSize: 16, margin: 50}}>
          Estacionado en la calle: Venezuela entre Lanza y Calama.
          Desde las 16:00 hasta las 20:00 el 2 de mayo de 2020
          se gastó 8 Bs</Text>

      </View>
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
