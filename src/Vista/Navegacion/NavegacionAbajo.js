import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import Inicio from "./../Pantallas/Inicio";
import Prueba0 from "./../Pantallas/Prueba0";
import Prueba1 from "./../Pantallas/Prueba1";
import Prueba2 from "./../Pantallas/Prueba2";
import Prueba3 from "./../Pantallas/Prueba3";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();   //Abajo
//const Tab = createTopTabNavigator();   //Arriba


export default class NavegacionAbajo extends Component {
  render()
  {
    console.disableYellowBox = true; 
    return (

        <Tab.Navigator>
          <Tab.Screen name="Prueba0" component={Prueba0} />
          <Tab.Screen name="Prueba1" component={Prueba1} />
          <Tab.Screen name="Prueba2" component={Prueba2} />
          <Tab.Screen name="Prueba3" component={Prueba3} />
        </Tab.Navigator>

    );
  }
}
