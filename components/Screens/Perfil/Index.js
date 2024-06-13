import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import Post from '../../Post/Index'

import { LinearGradient } from 'expo-linear-gradient'; // Background linear gradient
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper';

import LoginContext from '../../LoginContext/Index'; // Contexto para verificar qual usuário está logado
import PostsContext from '../../PostsContext/Index'; // Contexto para acessar o dataset de posts

export default function Perfil({ navigation }) {

  const { currentLogin } = useContext(LoginContext);
  console.log(currentLogin, 'Logado no perfil');

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

  const renderItem = ({ item }) => {
    if (item.idUser == currentLogin.id){
        return (
            <View>
            <Card style={Styles.card}>
                <Text style={Styles.cardTitle}>{item.title}</Text>

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
        )
    }
  };


  return (
    <View>
        <ScrollView style={Styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#FAC700', '#FF8A00']}
                style={Styles.background}
            />

            <View style={Styles.perfilInfo}>
                <View style={Styles.section}>
                    <View style={Styles.perfilFoto}>
                        <IconButton
                            icon="account"
                            size={100}
                        />
                    </View>
                    <Text>Meus dados</Text>
                    <Text>{currentLogin.username}</Text>
                    <Text>{currentLogin.cpf}</Text>
                    <Text>{currentLogin.email}</Text>

                </View>

                <View style={Styles.section}>
                    <Text style={Styles.textSection}>Comunidades</Text>
                    <View style={Styles.comunidadesView}>
                        <View style={Styles.comunidadesItens}></View>
                        <View style={Styles.comunidadesItens}></View>
                        <View style={Styles.comunidadesItens}></View>
                    </View>
                </View>
            </View>

            <Text style={{fontSize: 30, textAlign: 'center', marginTop: 20}}>Minhas Ideias</Text>

            <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            /> 
        
        </ScrollView>
        
        <TouchableOpacity style={Styles.floatingBtn} onPress={() => navigation.navigate('Novo Post')}>
                <IconButton
                    icon="plus"
                    size={60}
                />
        </TouchableOpacity>
    </View>
  );
}



