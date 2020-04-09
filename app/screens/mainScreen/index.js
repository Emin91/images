import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'

const MainScreen = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.upView}>
                <Image style={styles.img} resizeMode='contain' source={require('../../assets/images/card1.png')} />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => alert('Hello')} style={styles.touchableView}>
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default MainScreen
