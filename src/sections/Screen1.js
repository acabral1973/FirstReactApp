import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen1 extends Component {

    _goScreen2() {
        Actions.screen2( { texto: 'Vengo de SCREEN 1'})           
    }

    render() {

        return (
            <View>
                <Text>SCREEN 1 ACTIVA</Text>
                <Button
                    onPress={ () => this._goScreen2() }
                    title="ir a SCREEN 2"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});