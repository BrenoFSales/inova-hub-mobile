import { ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import Post from '../../Post/Index'

import { LinearGradient } from 'expo-linear-gradient'; // Background linear gradient
import { IconButton } from 'react-native-paper';

export default function Perfil({ navigation }) {


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
                    <Text>Nome do Usuário</Text>
                    <Text>Meus dados</Text>
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

            <Post/>
        
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



