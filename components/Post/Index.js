import React, { useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper';

import PostsContext from '../PostsContext/Index'; // Contexto para acessar o dataset de posts

import Styles from './Styles';

export default function Post() {
    const { posts } = useContext(PostsContext);
    const { setPosts } = useContext(PostsContext);

    // FUNÇÃO PARA AUMENTAR A CONTAGEM EM CADA ITEM
    const handleLikePress = (id) => {
        setPosts(
        posts.map( (item) => {
            if(id === item.id) {
            return(
                {...item, like: item.like + 1}
            )
            }
            else{return(item)}
        })
    )};

    const renderItem = ({ item }) => (
        <View>
            <Card style={Styles.card}>
                <Card.Title title={item.title}/>
                <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' }} />
                <Card.Content>
                    <Paragraph style={{marginVertical: 20}}>{item.description}</Paragraph>
                </Card.Content>
                <Card.Actions>   
                    <TouchableOpacity onPress={handleLikePress}>        
                        <IconButton
                            icon="lightbulb-outline"
                            size={20}
                            iconColor='white'
                            containerColor='orange'
                        />
                    </TouchableOpacity>  
                    <Text style={Styles.upVote}>{ item.like }</Text>
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