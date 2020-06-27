import Onboarding from 'react-native-onboarding-swiper';
import React, { Component } from "react";
import { View,  Text, Alert, Image, TouchableOpacity } from 'react-native';
import imagenes from "./../../Modelo/Img";

console.log(imagenes)
console.log("Onboardiiiiiiiiiiiiiiiiiiiiiiiing")

export default class Onboard extends Component {
  constructor(props){
    super(props);
    this.salir = this.salir.bind(this);
  }
  salir = () => {this.props.navigation.navigate('InicioSesion')};
  render()
  {
    return (

        <Onboarding
          onDone={this.salir}
          onSkip={this.salir}
          nextLabel="Siguiente"
          skipLabel="Saltar"
          DoneButtonComponent={()=>(<TouchableOpacity onPress={this.salir}><Text style = {{marginRight:20,fontSize:16,color:"#fff"}}>Fin</Text></TouchableOpacity>)}
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={imagenes.QuienesSomos} style = {{width:400,height:400}}/>,
              title: '¿Quienes Somos?',
              subtitle: 'Esta aplicación te permite controlar tu tiempo en los espacios de estacionamiento contralados por el departamento de tránsito.',
            },
            {
              backgroundColor: '#0B313F',
              image: <Image source={imagenes.Mapas} style = {{width:400,height:400}}/>,
              title: '¡Mapas interactivos!',
              subtitle: 'Visualiza las calles de la ciudad de Cochabamba en un mapa interactivo, el cual te permite ver la ubicación de los diferentes postes de servicio además de la cantidad de espacios disponibles en cada calle.',
            },
            {
              backgroundColor: '#E79A32',
              image: <Image source={imagenes.Contacto} style = {{width:400,height:400}}/>,
              title: 'Contáctanos',
              subtitle: 'Estamos siempre atentos a tus necesidades para tus conflictos de grúa y estacionamiento. Nuestra información de contacto está disponible siempre en la aplicación.',
            }

          ]}
        ></Onboarding>

    );

  }
}
