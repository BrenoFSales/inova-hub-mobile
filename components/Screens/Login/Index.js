import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from './Styles';

import { LinearGradient } from 'expo-linear-gradient'; // Background linear gradient
import LoginContext from '../../LoginContext/Index';

export default function Login({ navigation }) {

  Login.navigationOptions = {
    headerShown: false, // Oculta o cabeçalho
  };


  const { users } = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função que verifica se o login existe no dataset do context
  const verificacaoLogin = () => {
    const login = users.find(u => u.username === username && u.password === password) ;

    console.log(login);
    if (login) {
      navigation.navigate('Home');
      console.log('Login successful!')
    }

    else {
      alert('Usuário ou senha incorretos!')
    }
  }

  return (
    <View style={Styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#FAC700', '#FF8A00']}
        style={Styles.background}
      />
      <Image 
        source={require('../../../assets/images/logo.png')}
        style={Styles.logo}
      />

      <View style={Styles.viewInputs}>
        <Text style={Styles.labelInput}>Login</Text>
        <TextInput style={Styles.inputs}
          placeholder="Usuário" 
          value={username}
          onChangeText={setUsername} />

        <Text style={Styles.labelInput}>Senha</Text>
        <TextInput style={Styles.inputs}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword} />

        <Text style={{ marginLeft: 10, color: '#0047FF'}}>Esqueceu a senha?</Text>
        <Text style={{ marginLeft: 10}}>Primeira vez no Inova Hub?
          <Text style={{ color: '#0047FF' }} onPress={() => navigation.navigate('Cadastro')}> Cadastre-se</Text>
        </Text>
      </View>

      <TouchableOpacity style={Styles.button} onPress={verificacaoLogin}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'}}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );

}



