import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#d2d2d2',
    },

    viewOne: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableView: {
        width: '80%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27ae60',
    },
    buttonText: {
        fontSize: 25,
        color: '#ffffff'
    },

    viewTwo: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '80%',
    },

    viewThree: {
        flex: 0.2,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 2,
    },
    viewFour: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    someText: {
        fontSize: 15,
        color: '#000000'
    },
})

export default styles