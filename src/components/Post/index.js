import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Post = (props) => {
    const post = props.post;
    const navigation = useNavigation()
    const goToPostPage = () => {
        navigation.navigate('Post', { postId: post.id })
    }

    return (
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={{
                    uri: post.image

                }}
            />
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
                <Text style={styles.cost}>${post.oldPrice}</Text>
                <Text style={styles.per}> {post.newPrice}</Text>
                / night
            </Text>

            {/* Total */}
            <Text style={styles.totalPrice}>${post.totalPrice}</Text>
        </Pressable>
    );
};

export default Post;
