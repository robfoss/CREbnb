/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './styles'
import SuggestionRow from './SuggestionRow'

import { useNavigation } from '@react-navigation/native'

const LocationSearchScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Input component */}

            <GooglePlacesAutocomplete
                placeholder='Search Properties'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate('Guest Info')
                }}
                styles={{
                    textInput: styles.textInput
                }}
                query={{
                    key: '',
                    language: 'en',
                    type: '(cities)'//can change to addresses
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />


            {/* List of properties */}
            {/* <FlatList
                data={searchResults}
                renderItem={}
            /> */}
        </View>
    )
}

export default LocationSearchScreen
