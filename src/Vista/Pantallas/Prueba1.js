import React, { Component } from "react";
import { View,  Text, Alert, Button } from 'react-native';


export default class Pruebas extends Component {
  render()
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Prueba1</Text>
          <Button
            title = "Ir a Prueba0"
            onPress = {()=>this.props.navigation.navigate("Prueba0")}
            />
      </View>
    );
  }
}
