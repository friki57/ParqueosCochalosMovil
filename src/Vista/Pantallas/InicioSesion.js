import React, { Component } from 'react';
import { StyleSheet, View, ToastAndroid, Image } from 'react-native';

import ButtonLogin from '../Componentes/Formulario/Button';
import TextInputLogin from '../Componentes/Formulario/TextInput';
import LogoLogin from '../Componentes/Formulario/Logo';

import Images from '../../Modelo/Img';
import Constans from '../../Modelo/Constans';
import Colors from '../../Modelo/Colors';

import Fetch from "../../Controlador/Utils/Fetch"

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            correo:'',
            contra:''
        };

        this._onPress = this._onPress.bind(this);
        this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
        this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
    }
    _onPress() {
        console.log('Presionado');
        Fetch("/Movil/Sesion/", (res)=>{
          console.log("fetch",res)
          ToastAndroid.show(res.mensaje, ToastAndroid.SHORT);
          if(res.if == 1){
            global.usuario = res.datos
            this.props.navigation.navigate("Desplegables",{
              screen: "Mapas",
              params: {user: "jane"}
            })
          }
          else{
            console.log("-------------- no paso ----------------")
          }
        }, this.state, 'POST')

        Fetch("/Movil/Prueba/", (res)=>{
          console.log("fetch",res)
        })
    }
    _onChangeTextUsername(correo) {
        this.setState({ correo: correo })
    }
    _onChangeTextPassword(contra) {
        this.setState({ contra: contra })
    }
    render() {

      console.disableYellowBox = true;
        return (
            <View style={stylesLoginScreen.container}>
                <View style={styles.container}>
                  <Image source={Images.marca} style={styles.image}></Image>
                </View>

                <View style={stylesLoginScreen.form}>
                    <TextInputLogin
                        onChangeText={this._onChangeTextUsername}
                        source={Images.USERNAME}
                        placeholder={Constans.STRING.USER}
                        secureTextEntry={false}
                        autoCorrect={false}>
                    </TextInputLogin>
                    <TextInputLogin
                        onChangeText={this._onChangeTextPassword}
                        source={Images.PASSWORD}
                        placeholder={Constans.STRING.PASS}
                        secureTextEntry={true}
                        autoCorrect={false}>
                    </TextInputLogin>
                    <ButtonLogin
                        onPress={this._onPress}
                        titleButton={Constans.STRING.TITLE_BUTTON}>
                    </ButtonLogin>
                </View>
            </View>
        );
    }
}

const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.azul,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
    },
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
      flex: 1,
      width: 300,
      height: 300,
      resizeMode: 'contain'
    },
    text:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:20,
    },
});
