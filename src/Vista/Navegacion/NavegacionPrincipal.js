import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';


import NavegacionDesplegable from "./NavegacionDesplegable";
import Onboarding from "./../Pantallas/Onboarding";
import InicioSesion from "./../Pantallas/InicioSesion";


const Stack = createStackNavigator();
export default class NavegacionPrincipal extends Component {
  render()
  {
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              title: "Inicio"
            }}
            />
          <Stack.Screen
            name="InicioSesion"
            component={InicioSesion}
            options={{
              title: "InicioSesion"
            }}
            />
          <Stack.Screen
            name="Desplegables"
            children={NavegacionDesplegable}
            options={{
              title: "Desplegable"
            }}
            />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}












// <Stack.Screen name="Abajo" children={NavegacionAbajo} />
