import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={{ margin: 20 }}>
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
            </View>
            <Button
                title="Save Blog Post"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

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
    }
})

export default BlogPostForm;