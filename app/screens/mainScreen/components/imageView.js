import React from 'react'
import { Image } from 'react-native'
import styles from '../style'

const path = require('../../../assets/images/card1.png')

const ImageView = () => {
    return (
        <Image style={styles.img} resizeMode='contain' source={path} />
    )
}

export default ImageView
