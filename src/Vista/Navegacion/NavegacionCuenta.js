import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import MiCuenta from "./../Pantallas/MiCuenta";
import Historial from "./../Pantallas/Historial";

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
          <Tab.Screen name="MiCuenta" component={MiCuenta} />
          <Tab.Screen name="Historial" component={Historial} />
        </Tab.Navigator>

    );
  }
}
