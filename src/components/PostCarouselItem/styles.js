/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
    },

    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'

    },
    image: {
        height: '100%',
        aspectRatio: 1,
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

    }
})

export default styles;