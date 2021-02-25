/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    features: {
        marginVertical: 10,
        fontSize: 14,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,


    },
    prices: {
        fontSize: 16,
        marginVertical: 10

    },
    cost: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',

    },
    per: {
        fontWeight: 'bold',

    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'

    },
    longDescription: {
        marginVertical: 20,
        fontSize: 15,
        lineHeight: 22,
    }
})

export default styles;