// CommentsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Icons Biblioteca
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
//import { useNavigation } from '@react-navigation/native';

export default function Ideia({ navigation, route }) {

  const { post } = route.params;

  return (
    <View style={Styles.container}>
        <TouchableOpacity style={Styles.arrowBtn} onPress={() => navigation.navigate('Home')}>
            <FontAwesomeIcon icon={faArrowLeft} size={40} color="orange" />
        </TouchableOpacity>
        <Text style={Styles.title}>{post.title}</Text>
        <Image source={{ uri: post.image}} style={Styles.image}/>
        <Text style={Styles.description}>{post.text}</Text>
    </View>
  );
};



