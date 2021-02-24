/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResults from '../screens/SearchResults'
import SearchResultsMap from '../screens/SearchResultsMap'


const Tab = createMaterialTopTabNavigator();


const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',//font color for tab
            indicatorStyle: {
                backgroundColor: '#f15454',//the underline color
            }
        }}>
            <Tab.Screen name={'list'} component={SearchResults} />
            <Tab.Screen name={'map'} component={SearchResultsMap} />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
