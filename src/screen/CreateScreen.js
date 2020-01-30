import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput
                id="title"
                style={styles.input}
                value={title}
                onChangeText={(text) => { setTitle(text) }}
            />
            <Text style={styles.label}>Enter content:</Text>
            <TextInput
                id="content"
                style={styles.input}
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Button
                style={styles.addButton}
                title="Add Blog Post"
                onPress={() => addBlogPost(title, content)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 18,
        marginBottom: 10
    },
    form: {
        margin: 10
    },
    addButton: {
        paddingTop: 10
    }
})

export default CreateScreen;