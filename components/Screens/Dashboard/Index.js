import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Styles from './Styles';

const Dashboard = ({navigation}) => {
    return (
      <View style={Styles.container}>
        <View style={Styles.row}>
          <View style={Styles.card}>
            <Text style={Styles.cardTitle}>Total Ideias</Text>
          </View>
          <View style={Styles.card}>
            <Text style={Styles.cardTitle}>Total Likes</Text>
          </View>
        </View>
        <View style={Styles.row}>
          <View style={Styles.card}>
            <Text style={Styles.cardTitle}>Total Comentários</Text>
          </View>
          <View style={Styles.card}>
            <Text style={Styles.cardTitle}>Total Usuários</Text>
          </View>
        </View>
        <View style={Styles.largeCard}>
          <Text style={Styles.cardTitle}>Categorias</Text>
        </View>
      </View>
    );
  };

  export default Dashboard;