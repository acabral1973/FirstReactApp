/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component {

    // Ciclo de vida de los componentes, se llaman los siguientes métodos en este orden

    // El constructor, donde se pueden inicilizar cosas (propiedads, estado, etc) del componente
    constructor(props) {
        super(props)

        this.state = {
            title: 'Bienvenidos a FirstReactApplication',
            subTitle: 'Iniciando la app',
        }
    }

    // componentWillMount: Se invoca ants de renderizarse el components, por lo qu no podemos hacr referencias a views (aún no existen)
    // Buen momnto para cargar datos desde un WebService por ejemplo
    componentWillMount() {
    }

    // El componentDidMount se invoca cuando el componente ya stá renderizado. Aquí si podemos hacer referencia a los views del componente (ya estan creados)
    componentDidMount() {
        setTimeout( () => {
            this.setState({subTitle: 'Todos los módulos cargados'})
        }, 2000)
    }

    // componentWillReceiveProps se llama antes de que las props se hayan recibido, recibimos las propiedades que van a cambiar para poder compararlas con las actuales. 
    // Si vamos a hacer algún cambio en el estado de nuestro componente debido a las nuevas props, este es el momento.
    // las props actuals se manejan como this.propX y las nuevas como nextProps.propX
    componentWillReceiveProps(nextProps) {

    }

    // Esta función nos “pregunta” si debemos re-renderizar el componente con las nuevas props. 
    // Recibimos como en el anterior nextProps, y además nextState. En función de devolver un return true o un false, lo que indicará si se re-renderizará el componente o no.
    // Se usa para controlar que un componnte no se re-enderise aunque cambie una variable o su estado, si en realiad no es necesario
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.title != nextState.title || this.state.subTitle != nextState.subTitle) {
            return true // si ha cambiado la variable title del estado, repintamos
        } else {
            return false // en caso contrario no repintamos
        }
    }

    // Se ejecuta antes de actualizar las propiedads o el estado del componente
    // usamos this.propX para las actuales y nextProps.propX para las nuevas (las que van a ser)
    componentWillUpdate(nextProps, nextState) {

    }

    // Se ejecuta después de actualizar las propiedads o el estado del componente
    // usamos this.propX para las actuales y prevProps.propX para las anteriores (las que eran antes)
    componentDidUpdate(prevProps, prevState) {
        
    }

    // El render,es el mínimo que tiene que tener un componente. Es el que pinta las cosas en pantalla y se vuelve a ejecutar cada vez
    // que una variabl de las que se usan en él, cambia de valor o si cambia el estado del componente. No aplicar lógica, SOLO SE USA PARA PINTAR...
    render() {

        return (

            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.state.title}
                </Text>
                <Text style={styles.sub_title}>
                    {this.state.subTitle}
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }

    // Se llama al dstruirse el componente, pero no se ejecuta enseguida, puede tener un delay, por lo que no se hace nada importante, sirve para "matar" cosas pendientes
    componentWillUnmount() {

    }
    



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'red'
    },
    instructions: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 5,
    },
    sub_title: {
        fontSize: 18,
        textAlign: 'center',
        color: 'cyan',
        marginBottom: 5,
    },
});
