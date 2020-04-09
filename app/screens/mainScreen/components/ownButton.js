import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../style'

var buttonTitle = 'Click'

const OwnButton = () => {
    return (
        <TouchableOpacity onPress={() => alert('Hello')} style={styles.touchableView}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default OwnButton
