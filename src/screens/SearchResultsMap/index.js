/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
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

    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 })

    const flatlist = useRef()
    const map = useRef()

    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({ index: index })
        const selectedPlace = places[index]
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8
        }
        map.current.animateToRegion(region)
    }, [selectedPlaceId])
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                ref={map}
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
                    ref={flatlist}
                    data={places}//data to be rendered in flatlist
                    renderItem={({ item }) => <PostCarouselItem post={item} />}
                    horizontal //property creates a horizontal flatlist
                    showsHorizontalScrollIndicator={false} //hides horizontal scrollbar
                    snapToInterval={width - 60}//stops the automatic scroll. snaps flatlist item in place.
                    snapToAlignment={'center'}//snaps items to middle of screen
                    decelerationRate={"fast"}//determines how fast items will snap
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    );
};

export default SearchResultsMap;
