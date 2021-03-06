import React from 'react';
import { Text, View, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto"
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation()
    return (
        <View>
            {/* Search bar here */}
            <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('Search Properties')}>
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>Search Properties</Text>
            </Pressable>
            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpg')}
                style={styles.image}
            >
                {/* Title */}
                <Text style={styles.title}>Go Near</Text>

                {/* Button */}
                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Explore Btn')}>
                    <Text style={styles.buttonText}>Explore Properties</Text>
                </Pressable>
            </ImageBackground>
        </View >
    )
}

export default HomeScreen


