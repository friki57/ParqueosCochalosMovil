import React, { Component } from "react";
import { View,  Text } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";


class Marcador extends Component
{
  constructor(props){
    super(props);
    this.state =
    {
      ubicacion : (this.props.ubicacion)?this.props.ubicacion:[0,0],
      color : (this.props.color)?this.props.color:'#00cccc'
    }
    console.log(this.props.id);
  }
  render()
  {
    return (
        <MapboxGL.PointAnnotation selected = {true}
        key={this.props.id}
        id={this.props.id}
        coordinate={this.state.ubicacion}
        marker-color="#000000">
        <View style={{
                  height: 30,
                  width: 30,
                  backgroundColor: this.state.color,
                  borderRadius: 50,
                  borderColor: '#fff',
                  borderWidth: 3
        		}}>
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
