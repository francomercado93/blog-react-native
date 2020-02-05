import { FontAwesome } from '@expo/vector-icons';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();

        // Cada vez que volvemos a esta pantalla hacemos el llamado a la funcion 
        // getBlogPosts() para obtener la lista actualizada de posts
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        }
    }, []);

    return (
        <View>
            <FlatList
                data={state} //???
                // style={styles.flatList}
                // keyExtractor={blogPost => blogPost.id} id es un numero y keyExtractor tiene que ser de tipo string
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