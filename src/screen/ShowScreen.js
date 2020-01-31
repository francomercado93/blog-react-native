import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View style={styles.blogContent}>
            <Text style={styles.textTitle}>{blogPost.title}</Text>
            <Text style={styles.textContent}>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <FontAwesome name="pencil" size={35} />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({

    textTitle: {
        fontSize: 25,
        margin: 10,
        fontWeight: 'bold'
    },
    blogContent: {
        borderColor: 'black',
        borderWidth: 1,
        height: 400,
        marginVertical: 20
    },
    textContent: {
        fontSize: 16,
        margin: 10
    }
})

export default ShowScreen;