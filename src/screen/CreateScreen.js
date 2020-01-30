import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View style={styles.form}>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput style={styles.input} value={title} onChange={text => setTitle(text)} />
            <Text style={styles.label}>Enter content:</Text>
            <TextInput style={styles.input} value={content} onChange={text => setContent(text)} />
            <Button style={styles.addButton} title="Add Blog Post" />
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