import React, { useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import PostsContext from '../PostsContext/Index'; // Contexto para acessar o dataset de posts

import Styles from './Styles';

export default function Post() {
    const navigation = useNavigation();
    const { posts } = useContext(PostsContext);
    const { setPosts } = useContext(PostsContext);

    // FUNÇÃO PARA DAR UPVOTES EM CADA IDEIA USANDO ID
    const handleLike = (postId) => {
        const updatedPosts = posts.map(post => {
          if (post.id === postId) {
            const newLikes = post.liked ? post.likes - 1 : post.likes + 1;
            return { ...post, likes: newLikes, liked: !post.liked };
          }
          return post;
        });
        setPosts(updatedPosts);
      };

      
    const renderItem = ({ item }) => (
        <View>
            <Card style={Styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('Ideia', { post: item })}>  
                    <Text style={Styles.cardTitle}>{item.title}</Text>
                </TouchableOpacity> 

                <Card.Cover source={{ uri: item.image }} />
                <Card.Content>
                    <Paragraph style={{marginVertical: 20}}>{item.description}</Paragraph>
                </Card.Content>

                <Card.Actions> 
                    <TouchableOpacity onPress={() => handleLike(item.id)}>        
                        <IconButton
                            icon="lightbulb-outline"
                            size={20}
                            iconColor='white'
                            containerColor='orange'
                        />
                    </TouchableOpacity>  
                    <Text style={Styles.upVote}>{ item.likes }</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Comentarios', { postId: item.id, comments: item.comments })}>  
                        <IconButton
                            icon="comment"
                            size={20}
                            iconColor='white'
                            containerColor='orange'
                        />
                    </TouchableOpacity> 

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
            keyExtractor={item => item.id}
        /> 
    );
}