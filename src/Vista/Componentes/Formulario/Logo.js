import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import Images from '../../../Modelo/Img';

export default class Logo extends Component {
  constructor(props)
  {
    console.log(props.text);
    super(props);
  }

  render() {
    /*let pic = {
      uri: 'https://www.cocinista.es/download/bancorecursos/recetas/chorizo-argentino2.jpg'
    };*/
    return (
      <View style={styles.container}>
        <Image source={this.props.imagen} style={styles.image}></Image>
      </View>
    );
 }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:120,
        height:120,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:20,
    },
});
