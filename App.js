/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler'

import feed from './assets/data/feed';

import Router from './src/navigation/Router'

import SearchResultsScreen from './src/screens/SearchResults'
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import LocationSearchScreen from './src/screens/LocationSearch';
import GuestsScreen from './src/screens/Guest';

const post1 = feed[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
