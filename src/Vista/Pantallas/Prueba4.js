import React, { Component } from "react";
import { View,  Text, Alert, Button } from 'react-native';


export default class Pruebas extends Component {
  render()
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Prueba4</Text>
        <Button
          title = "Ir a Prueba5"
          onPress = {()=>this.props.navigation.navigate("Prueba5")}
          />
        <Button
          title = "Ir a Prueba6"
          onPress = {()=>this.props.navigation.navigate("Prueba6")}
          />
      </View>
    );
  }
}
