/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker'
import places from '../../../assets/data/feed';
import PostCarouselItem from '../../components/PostCarouselItem';
import { FlatList } from 'react-native-gesture-handler';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SearchResultsMap = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null)
    const width = useWindowDimensions().width
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {places.map(place => (
                    <CustomMarker
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />)
                )}
            </MapView>
            <View style={{ position: 'absolute', bottom: 10 }}>
                <FlatList
                    data={places}//data to be rendered in flatlist
                    renderItem={({ item }) => <PostCarouselItem post={item} />}
                    horizontal //property creates a horizontal flatlist
                    showsHorizontalScrollIndicator={false} //hides horizontal scrollbar
                    snapToInterval={width - 60}//stops the automatic scroll. snaps flatlist item in place.
                    snapToAlignment={'center'}//snaps items to middle of screen
                    decelerationRate={"fast"}//determines how fast items will snap
                />
            </View>
        </View>
    );
};

export default SearchResultsMap;
