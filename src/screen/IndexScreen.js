import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {

    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

    return (
        <View>
            <FlatList
                data={state} //???
                // style={styles.flatList}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.text}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <FontAwesome name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <FontAwesome name="plus" size={30} />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    icon: {
        fontSize: 24
    },
    flatList: {
        marginVertical: 10,
    },
    buttonHeader: {
        fontSize: 30,
        marginRight: 20
    }
})

export default IndexScreen;