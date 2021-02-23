import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        marginLeft: 25,
        marginTop: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 30,//if the height is 60 the radius should be half of the height
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }

});

export default styles;