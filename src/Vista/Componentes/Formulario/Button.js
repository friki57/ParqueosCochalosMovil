import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Colors from '../../../Modelo/Colors';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={stylesButton.container}
                    onPress={this.props.onPress}>
                    <Text
                        style={stylesButton.text}>{this.props.titleButton}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const stylesButton = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D53F3D",
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255,255,255,0.7)',
    },
    text: {
        color: Colors.white,
        textAlign: 'center',
        height: 20,
    },
});
