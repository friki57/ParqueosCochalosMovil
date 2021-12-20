import React, { Component } from "react";
import { View, Text, Alert } from 'react-native';

import Mapa from './../Componentes/Mapas/Mapa';
import imagenes from "./../../Modelo/Img";
const colores = {
  rojo: "#f46",
  verde: "#6f4",
  azul: "#36f",
  negro: "#000"
}
export default class Inicio extends Component {
  render()
  {
    console.log(this.props.route,global.usuario)
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 2, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
          <View style={{width: 10, height: 10, backgroundColor: colores.verde}}/>
          <Text>Calles con espacios disponibles</Text>
        </View>
        <View style={{ flex: 2, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
          <View style={{width: 10, height: 10, backgroundColor: colores.azul}}/>
          <Text>Calles sin espacios disponibles</Text>
        </View>
        <View style={{ flex: 2, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
          <View style={{width: 10, height: 10, backgroundColor: colores.rojo}}/>
          <Text>Calles prohibidas</Text>
        </View>
        <View style={{ flex: 2, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
          <View style={{width: 10, height: 10, backgroundColor: colores.negro}}/>
          <Text>Tú ubicación</Text>
        </View>
        <Mapa></Mapa>
      </View>
    );

  }
}
