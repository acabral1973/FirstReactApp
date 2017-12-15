import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import axios from 'axios'

export default class HousesList extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            title: 'Houses list',
            list: [],
            selected: null
        }
    }

    componentWillMount(){
        axios.get('http://146.185.137.85/got/web/casas')
        .then((response) => {
            const downloadedList = response.data && response.data.records ? response.data.records : []
            this.setState({ list : downloadedList })
            console.log("downloadedList", downloadedList)
        })
        .catch((error) => {
            console.log("axios get error", error)
        })
    }

    renderItem(item){
        
        return (
            <View>
                <Text style={styles.cell}> { item.nombre } </Text>

                <Button 
                    title = { 'Pulsa para seleccionar ' +  item.nombre }
                    onPress = { () => this.setState({ selected: item })}
                />
            </View>
        )
    }
 
    render() {

        const selectedHouse = this.state.selected ? this.state.selected.nombre : 'Seleccione una casa'
        return(
            <View>
                <Text style={styles.title}> { 'Casa seleccionada: ' + selectedHouse } </Text>
                <FlatList
                    data={ this.state.list }
                    renderItem={ ({ item }) => this.renderItem(item) }
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center'
    },
    cell: {
        fontSize: 16,
        height: 50,
        textAlign: 'center',
        marginVertical: 2,
        backgroundColor: 'cyan'
    },
});
