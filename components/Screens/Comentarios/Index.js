// CommentsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Styles from './Styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Icons Biblioteca
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
//import { useNavigation } from '@react-navigation/native';

const CommentsScreen = ({ navigation, route }) => {
  //const navigation = useNavigation();
  const { comments } = route.params;

  const renderItem = ({ item }) => (
    <View style={Styles.commentContainer}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View>
      <TouchableOpacity style={Styles.arrowBtn} onPress={() => navigation.navigate('Home')}>
          <FontAwesomeIcon icon={faArrowLeft} size={40} color="orange" />
      </TouchableOpacity>

      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};


export default CommentsScreen;
