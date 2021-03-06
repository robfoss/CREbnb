/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Post = (props) => {
    const width = useWindowDimensions().width
    const post = props.post;


    const navigation = useNavigation();
    const goToPostPage = () => {
        navigation.navigate('Post', { postId: post.id })
    }

    return (
        <Pressable onPress={goToPostPage} style={[styles.container, { width: width - 60 }]}>
            <View style={styles.innerContainer}>
                {/* Image */}
                <Image
                    style={styles.image}
                    source={{
                        uri: post.image

                    }}
                />
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                    {/* Features */}
                    <Text style={styles.features}>
                        {post.bed} bed {post.bedroom} bedroom
            </Text>

                    {/* Type and Description */}
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>

                    {/* Price */}
                    <Text style={styles.prices}>
                        <Text style={styles.per}>${post.newPrice}</Text>
                    / night
                </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Post;
