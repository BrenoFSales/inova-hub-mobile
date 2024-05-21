import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Styles from './Styles';

export default function Idiomas({navigation}){
    return(
        <View>
            <Text fontWeight="Bold" fontSize="18">Selecione o Idioma de preferência: {"\n"}</Text>
                <Button style={Styles.button} title='Inglês' onPress={(0)}></Button>
                    <Text></Text>
                <Button style={Styles.button} title='Português' onPress={(0)}></Button> 
                    <Text></Text>
                <Button style={Styles.button} title='Espanhol' onPress={(0)}></Button>  
                    <Text></Text>  
                <Button style={Styles.button} title='Japonês' onPress={(0)}></Button>     
        </View>
    )
}
