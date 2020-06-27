import React, { Component } from "react";
import { View,  Text, Button } from 'react-native';
import SocketIOClient from 'socket.io-client/dist/socket.io.js'

class Fetch extends Component
{
  constructor(props){
    super(props);
    this.calles = this.calles.bind(this)
    this.state = {calles:"",socket:"-1"}
    this.socket = SocketIOClient('http://104.129.131.142:4000', { transports: ['websocket'], jsonp: false });
    this.socket.connect();
    this.socket.on('dong', (res)=>
    {
      console.log(res);
      this.setState({socket:(res)})
    });
    this.socket.on('calles', (res)=>
    {
      console.log(res);
    });
  }
  calles(e)
  {
    fetch("http://104.129.131.142:4000/MapasMovil")
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        data = data.filter(a=>a!=undefined)
        data = data.map(
          (a)=>
          {
            if(a.geojson!=undefined)
            {
              // console.log(a.geojson[0])
              return {
                lon: (a.geojson[0].lon + a.geojson[1].lon)/2,
                lat: (a.geojson[0].lat + a.geojson[1].lat)/2
              }
            }

          }
        )
        //this.setState({calles:JSON.stringify(data)})
      });
  }
  // <Text>{this.state.calles}</Text>
  render()
  {
    return (
      <>

      <Button
        title = {this.state.socket}
        onClick = {this.calles()}
        ></Button>
      </>
    )
  }
}
export default Fetch;
