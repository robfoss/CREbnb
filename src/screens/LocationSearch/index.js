/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './styles'
import searchResults from '../../../assets/data/search'

import { useNavigation } from '@react-navigation/native'

const LocationSearchScreen = () => {

    const navigation = useNavigation();

    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            {/* Input component */}
            <TextInput
                sytle={styles.textInput}
                placeholder="Search Properties"
                value={inputText}
                onChangeText={setInputText}
            />
            {/* List of properties */}
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Guest Info')} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={25} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default LocationSearchScreen
