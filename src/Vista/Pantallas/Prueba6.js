import React, { Component } from "react";
import { View,  Text, Alert, Button } from 'react-native';


export default class Pruebas extends Component {
  render()
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Prueba6</Text>
          <Button
            title = "Ir a Prueba4"
            onPress = {()=>this.props.navigation.navigate("Prueba4")}
            />
          <Button
            title = "Ir a Prueba5"
            onPress = {()=>this.props.navigation.navigate("Prueba5")}
            />
      </View>
    );
  }
}
