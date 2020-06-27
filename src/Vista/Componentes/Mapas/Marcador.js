import React, { Component } from "react";
import { View,  Text } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";


class Marcador extends Component
{
  constructor(props){
    super(props);
    this.state =
    {
      ubicacion : (this.props.ubicacion)?this.props.ubicacion:[0,0]
    }
  }
  render()
  {
    return (
        <MapboxGL.PointAnnotation selected = {true}
        key={this.props.texto}
        id={this.props.texto}
        coordinate={this.state.ubicacion}>
        <View style={styles.annotationContainer}>
					<View style={styles.annotationFill} />
				</View>
          <MapboxGL.Callout title={this.props.texto} />
        </MapboxGL.PointAnnotation>
    )
  }
}
export default Marcador;

const styles = {
  container: {
    height: 300,
    width: 300,
    backgroundColor: "transparent"
  }
};
