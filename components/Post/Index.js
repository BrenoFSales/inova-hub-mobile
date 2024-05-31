import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper';

import PostsContext from '../PostsContext/Index'; // Contexto para acessar o dataset de posts

import Styles from './Styles';

export default function Post() {
    const { posts } = useContext(PostsContext);

    const renderItem = ({ item }) => (
        <View>
            <Card style={Styles.card}>
                <Card.Title title={item.title}/>
                <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' }} />
                <Card.Content>
                    <Paragraph>{item.description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <IconButton
                        icon="lightbulb-outline"
                        size={20}
                        iconColor='white'
                        containerColor='orange'
                    />
                    <IconButton
                        icon="comment"
                        size={20}
                        iconColor='white'
                        containerColor='orange'
                    />
                    <IconButton
                        icon="share"
                        size={20}
                        iconColor='white'
                        containerColor='orange'
                    />
                </Card.Actions>
            </Card>
        </View>
    );

    return (
        <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        /> 
    );
}