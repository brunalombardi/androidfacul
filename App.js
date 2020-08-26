import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import estilo from './src/Estilo'
import Fragmento from './src/Fragmento';
import Botao from './src/Botao';
import Parametro from './src/Parametro';
import Contador from './src/Contador';
import Calculadora from './src/CalculadoraAtividade';

export default function App() {
  return (
    <View style={styles.Calculadora}>
     {/* <Fragmento></Fragmento> 
      <Botao></Botao>  */}
      <Calculadora></Calculadora>
    
      <StatusBar style="auto" />
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: 'beige',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  Calculadora: {
    flexGrow: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  text: {
    color: 'white',
    fontSize: 32
  },
});
