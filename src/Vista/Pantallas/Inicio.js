import React, { Component } from "react";
import { View, Text, Alert } from 'react-native';

import Mapa from './../Componentes/Mapas/Mapa';
import imagenes from "./../../Modelo/Img";

export default class Inicio extends Component {
  render()
  {
    console.log(this.props.route,global.usuario)
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Mapa></Mapa>
        <Text>Mapa Interactivo</Text>
      </View>
    );

  }
}
