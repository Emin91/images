import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './style'
import OwnButton from './components/ownButton'
import ImageView from './components/imageView'

var someText = 'Ваш текст: '

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            placeholderValue: 'Type something',
            textValue: 'Text from variable',
            value: '',
        };
        this.changeText = this.changeText.bind(this) //Привязка функции changText к Стейтам (State)
    }

    changeText(nextText) {
        this.setState({ value: nextText })
    }

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.viewOne}>
                    <OwnButton />
                </View>
                <View style={styles.viewTwo}>
                    <ImageView />
                </View>
                <View style={styles.viewThree}>
                    <TextInput placeholder={this.state.placeholderValue} onChangeText={this.changeText} style={styles.input} />
                </View>
                <View style={styles.viewFour}>
                    <Text style={styles.someText}>{someText}{this.state.value}</Text>
                </View>
            </View>
        )
    }
}
