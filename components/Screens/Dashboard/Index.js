import React, { useContext } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Styles from './Styles';

import LoginContext from '../../LoginContext/Index'; // Contexto para verificar qual usuário está logado
import PostsContext from '../../PostsContext/Index'; // Contexto para acessar o dataset de posts


const Dashboard = ({navigation}) => {

  const { posts } = useContext(PostsContext);
  const { users } = useContext(LoginContext);

  const contadorItens = (array) => {
    return array.length;
  }

  const contadorTotalLikes = (ideasArray) => {
    return ideasArray.reduce((total, idea) => total + idea.likes, 0);
  };

  // const contadorComentarios = (ideasArray) => {
  //   ideasArray.reduce((total, idea) => total + idea.comments, 0);
  //   return ideasArray.length;
  // };

  const contadorComentarios = (ideasArray) => {
    return ideasArray.reduce((total, idea) => total + idea.comments.length, 0);
  };

  const totalIdeias = contadorItens(posts);
  const totalUsuarios = contadorItens(users);
  const totalLikes = contadorTotalLikes(posts);
  const totalComentarios = contadorComentarios(posts);


  
    return (
      <View style={Styles.container}>
        <View style={Styles.row}>
          <View style={Styles.card}>
            <Text style={Styles.cardTitle}>Total Ideias:</Text>
            <Text style={Styles.cardInfo}>{totalIdeias}</Text>
          </View>

          <View style={Styles.card}>
            <Text style={Styles.cardTitle}>Total Likes:</Text>
            <Text style={Styles.cardInfo}>{totalLikes}</Text>
          </View>
        </View>

        <View style={Styles.row}>
          <View style={Styles.card}>
            <Text style={Styles.cardTitle}>Total Comentários:</Text>
            <Text style={Styles.cardInfo}>{totalComentarios}</Text>
          </View>
          <View style={Styles.card}>
            <Text style={Styles.cardTitle}>Total Usuários:</Text>
            <Text style={Styles.cardInfo}>{totalUsuarios}</Text>
          </View>
        </View>
        
        <View style={Styles.largeCard}>
          <Text style={Styles.cardTitle}>Categorias:</Text>
          <Text style={Styles.cardInfo}>- TI</Text>
          <Text style={Styles.cardInfo}>- Marketing</Text>
          <Text style={Styles.cardInfo}>- Biológicas</Text>
          <Text style={Styles.cardInfo}>- Ambiental</Text>
        </View>
      </View>
    );
  };

  export default Dashboard;