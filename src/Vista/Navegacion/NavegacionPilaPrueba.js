import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import Prueba4 from "./../Pantallas/Prueba4";
import Prueba5 from "./../Pantallas/Prueba5";
import Prueba6 from "./../Pantallas/Prueba6";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default class NavegacionPrincipal extends Component {
  render()
  {
    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Prueba4"
            component={Prueba4}
            options={{
              title: "Prueba4"
            }}
            />
          <Stack.Screen
            name="Prueba5"
            component={Prueba5}
            options={{
              title: "Prueba5"
            }}
            />
          <Stack.Screen
            name="Prueba6"
            component={Prueba6}
            options={{
              title: "Prueba6"
            }}
            />

        </Stack.Navigator>
    );
  }
}
