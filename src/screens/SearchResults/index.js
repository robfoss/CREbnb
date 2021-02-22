import React from 'react';

import Post from '../../components/Post';
import { FlatList, View } from 'react-native';

import feed from '../../../assets/data/feed';


//Render Items to flatlist
const SearchResultsScreen = () => {
    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    );
};

export default SearchResultsScreen;
