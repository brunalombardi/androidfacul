import React, { useState } from 'react'
import {Button, Text, TextInput,View } from 'react-native'

export default props => {
    const [valor1, setValor1] = useState('')
    const [valor2, setValor2] = useState('')
    const [resultado, setResultado] = useState('')

    function Soma(){
        setResultado(Number(valor1) + Number(valor2))
    }
    function Subtracao() {
        setResultado(Number(valor1) - Number(valor2))
    }
    function Multiplicacao() {
        setResultado(Number(valor1) * Number(valor2))
    }
    function Divisao() {
        if (valor1 == 0 || valor2 == 0 ) {
            setResultado('Não é possível realizar divisão por 0')
        } else {
        setResultado(Number(valor1) / Number(valor2))
    }
    }
    
    
    return(
        <View>
            <TextInput placeholder="insira o primeiro numero" onChangeText={setValor1}/><br></br>
            <TextInput placeholder="insira o segundo numero" onChangeText={setValor2}/>
            <text><br></br>Selecione a operação:</text>
            
            <br></br><Button color='#5f9ea0' title="+" onPress={Soma} />
            <Button color='#5f9ea0' title="-" onPress={Subtracao} />
            <Button color='#5f9ea0' title="*" onPress={Multiplicacao} />
            <Button color='#5f9ea0' title="/" onPress={Divisao} /> 
            
                <br></br><Text>Resultado: {resultado}</Text>
                                  
            
           
           
        </View>
    )
    
}

