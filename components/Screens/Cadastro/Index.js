import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from './Styles';

import { LinearGradient } from 'expo-linear-gradient'; // Background linear gradient

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Icons Biblioteca
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

export default function Cadastro({ navigation }) {
  return (
    <SafeAreaView style={Styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FAC700', '#FF8A00']}
        style={Styles.background}
      />

      <TouchableOpacity style={Styles.arrowBtn} onPress={() => navigation.navigate('Login')}>
        <FontAwesomeIcon icon={faArrowLeft} size={40} color="white" />
      </TouchableOpacity>

      <Image 
        source={require('../../../assets/images/logo.png')}
        style={Styles.logo}
      />

      <View style={Styles.viewInputs}>
        <Text style={Styles.labelInput}>Nome</Text>
        <TextInput style={Styles.inputs}
          placeholder="Nome" />

        <Text style={Styles.labelInput}>CPF</Text>
        <TextInput style={Styles.inputs}
          placeholder="CPF" />

        <Text style={Styles.labelInput}>E-mail</Text>
        <TextInput style={Styles.inputs}
          placeholder="E-mail" />

        <Text style={Styles.labelInput}>Telefone</Text>
        <TextInput style={Styles.inputs}
          placeholder="Telefone" />

      </View>

      <TouchableOpacity style={Styles.button}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'}}>Cadastrar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}



