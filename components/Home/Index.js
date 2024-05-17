import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import Styles from './Styles';


import { LinearGradient } from 'expo-linear-gradient'; // Background linear gradient

export default function Home({ navigation }) {

  return (
    <View style={Styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FAC700', '#FF8A00']}
        style={Styles.background}
      />
        <Text>Home Screen</Text>  
    </View>
  );
}



