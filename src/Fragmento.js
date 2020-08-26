import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Parametro from './Parametro'
import Contador from './Contador';

export default function Fragmento() {
    return(
        <React.Fragment>
            <View style={styles.view1}>
            <Parametro valor1="10"></Parametro>
            </View> 
            <View style={styles.view2}>
            <Contador inicial={10}></Contador>
            </View>                 
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    view1:{
        flexGrow:2, //O componente pode crescer e ocupar a tela toda
        backgroundColor: '#5f9ea0',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    view2:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: 'darkslateblue',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
        width: "100%",
    },

})