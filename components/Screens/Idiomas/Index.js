import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Styles from './Styles';

export default function Idiomas({navigation}){
    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>Selecione o Idioma de preferência: {"\n"}</Text>
                <TouchableOpacity style={Styles.button} onPress={(0)}><Text style={Styles.textBtn}>Inglês</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={(0)}><Text style={Styles.textBtn}>Portugês</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={(0)}><Text style={Styles.textBtn}>Espanhol</Text></TouchableOpacity> 
                <TouchableOpacity style={Styles.button} onPress={(0)}><Text style={Styles.textBtn}>Japonês</Text></TouchableOpacity>     
        </View>
    )
}
