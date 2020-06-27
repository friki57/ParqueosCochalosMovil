import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import ButtonLogin from '../Componentes/Formulario/Button';

import imagenes from "./../../Modelo/Img";
import Fetch from "../../Controlador/Utils/Fetch";

export default class Actual extends Component {
  constructor(props){
    super(props);
    this.state = {
      calle:"",
      fecha:"",
      fechaFinal:""
    }
    Fetch("/ParqueoActual/"+global.usuario.key, (res)=>{
      console.log("---------------------------------------",res)
      if(res!=0)
      this.setState(res)
    })
  }
  render()
  {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Actulamente estacionado en:
          {this.state.calle}
          Desde las {this.state.fecha}
          Con tiempo limite hasta las {this.state.fechaFinal}
        </Text>
        <ButtonLogin
            onPress={()=>{console.log("Modificar Tiempos")}}
            titleButton={"Modificar Tiempo de uso"}>
        </ButtonLogin>
      </View>
    );

  }
}
