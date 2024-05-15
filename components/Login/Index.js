import { StyleSheet, Text, View } from 'react-native';
import Styles from './Styles';

import { LinearGradient } from 'expo-linear-gradient'; // Background linear gradient

export default function Login() {
  return (
    <View style={Styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FAC700', '#FF8A00']}
        style={Styles.background}
      />
    </View>
  );
}



