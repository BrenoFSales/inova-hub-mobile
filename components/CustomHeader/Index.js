import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Icons Biblioteca
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

export default function CustomHeader({ title }) {

  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#FAC700', '#FF8A00']} style={styles.header}>
        <Image 
            source={require('../../assets/images/logoHeader.png')}
            style={styles.logo}
        />
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu}>
            <FontAwesomeIcon icon={faBars} size={25} color="white" />
        </TouchableOpacity>
    </LinearGradient>
  );
};  

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 20,
    marginLeft: -40
  },

  menu: {
    paddingTop: 20,
  },

  logo: {
    marginTop: 20,
    width: 70,
    height: 40,
  }
});
