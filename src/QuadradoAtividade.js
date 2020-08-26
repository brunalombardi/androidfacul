import React from 'react'
import {View} from 'react-native'

export default props => {
    const lado = parseInt(props.lado)
    return (
        <View style={{height:lado, 
            width:lado, 
            backgroundColor: props.cor || '#000'}}>
        </View>
    );
}
