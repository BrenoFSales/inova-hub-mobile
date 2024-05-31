import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from './Styles';

import { LinearGradient } from 'expo-linear-gradient'; // Background linear gradient

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Icons Biblioteca
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

import LoginContext from '../../LoginContext/Index';

export default function Cadastro({ navigation }) {

  const { addLogin } = useContext(LoginContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    addLogin(username, password, cpf, email);
    navigation.navigate('Login'); // Volta para a tela anterior
  };



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
          placeholder="Nome"
          value={username}
          onChangeText={setUsername} />

        <Text style={Styles.labelInput}>CPF</Text>
        <TextInput style={Styles.inputs}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf} />

        <Text style={Styles.labelInput}>E-mail</Text>
        <TextInput style={Styles.inputs}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail} />

        <Text style={Styles.labelInput}>Telefone</Text>
        <TextInput style={Styles.inputs}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword} />

      </View>

      <TouchableOpacity style={Styles.button} onPress={handleAddUser}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'}}>Cadastrar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}



