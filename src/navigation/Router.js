/* eslint-disable prettier/prettier */
import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import HomeTabNavigator from './HomeTabNavigator'
import LocationSearchScreen from '../screens/LocationSearch';
import GuestsScreen from '../screens/Guest'
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"Search Properties"}
                    component={LocationSearchScreen}
                    options={{
                        title: "Search For Properties"
                    }}
                />
                <Stack.Screen
                    name={"Guest Info"}
                    component={GuestsScreen}
                    options={{
                        title: "Guest Information"
                    }}
                />
                <Stack.Screen
                    name={"Post"}
                    component={PostScreen}
                    options={{
                        title: "Property Information"
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
