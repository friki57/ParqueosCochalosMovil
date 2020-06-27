import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import Inicio from "./../Pantallas/Inicio";
import Actual from "./../Pantallas/Actual";

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
          <Tab.Screen name="Mapa" component={Inicio} />
          <Tab.Screen name="Actual" component={Actual} />
        </Tab.Navigator>

    );
  }
}
