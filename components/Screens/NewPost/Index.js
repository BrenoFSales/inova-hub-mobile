import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import RNPickerSelect from 'react-native-picker-select'
import {useState} from 'react';


import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Icons Biblioteca
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 

export default function NewPos({ navigation }) {

    const categorias = [
        {label: 'TI', value: 'ti'},
        {label: 'Marketing', value: 'marketing'},
        {label: 'Biológicas', value: 'biolóicas'},
        {label: 'Ambiental', value: 'ambiental'},
    ]

    const [categoria, setCategoria] = useState(categorias[0])

  return (
    <View style={Styles.container}>
        <TouchableOpacity style={Styles.arrowBtn} onPress={() => navigation.navigate('Perfil')}>
            <FontAwesomeIcon icon={faArrowLeft} size={40} color="orange" />
        </TouchableOpacity>

        <TextInput
            style={Styles.inputs}
            placeholder='Digite um título para sua ideia:'
        />

        <TextInput
            style={Styles.inputs}
            placeholder='Carregue o URL de imagens'
        />

        <TextInput
            style={Styles.inputs}
            placeholder='Descrição da sua ideia:'
            multiline={true}
            numberOfLines={8}
            maxLength={40}
            textAlignVertical='top'
        />

        <TextInput 
            style={Styles.inputs}
            placeholder='Adicione colaboradores'
        />


        <RNPickerSelect
            onValueChange={(value) => setCategoria(value)}
            items={categorias}
            style={pickerSelect}
            useNativeAndroidPickerStyle={false}
            placeholder={{
                label: 'Selecione uma categoria...',
                value: null,
                color: 'grey',
              }}
            Icon={() => {
            return <Icon name="arrow-drop-down" size={40} color="gray" />;
            }}
        />

        <TouchableOpacity style={Styles.button}>
            <Text style={Styles.txtButton}>Postar</Text>
        </TouchableOpacity>

    </View> 
  );
}

const pickerSelect = StyleSheet.create({
    inputAndroid: {
        width: 290,
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 10,
        marginBottom: 30,
        color: 'black',
        fontSize: 15,
        opacity: 0.7,
    },
  });



