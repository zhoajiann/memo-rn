import React from 'react'
import {TouchableOpacity,Text} from 'react-native'

const style = {
    width: 200,
    height: 50,
    color: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
}

const Btn = props => {
    return (
        <TouchableOpacity 
            style={ props.style?props.style:style }
            onPress={props.onPress}
        >
            <Text 
                style={ { color: props.style?.color ? props.style.color : '#000' } }
            >
                { props.children }
            </Text>
        </TouchableOpacity>

    )
}

export default Btn
