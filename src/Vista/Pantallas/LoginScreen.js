import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ButtonLogin from '../../Components/login/Button';
import TextInputLogin from '../../Components/login/TextInput';
import LogoLogin from '../../Components/login/Logo';

import Images from '../../Config/images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:''
        };

        this._onPress = this._onPress.bind(this);
        this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
        this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
    }
    _onPress() {
        console.log('button preset..!!!');
        console.log(this.state.username);
        console.log(this.state.password);
        
    }
    _onChangeTextUsername(username) {
        this.setState({ username: username })
    }
    _onChangeTextPassword(password) {
        this.setState({ password: password })
    }
    render() {
        return (
            <View style={stylesLoginScreen.container}>
                <LogoLogin style={stylesLoginScreen.logo} />
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
        backgroundColor: Colors.dark,
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
