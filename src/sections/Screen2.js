import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Screen2 extends Component {

    render() {

        return (
            <View>
                <Text>SCREEN 2 ACTIVA</Text>
                <Text>{ this.props.texto }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});