import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Styles from './Styles';

export default function Dashboard({navigation}){
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Ideias</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Likes</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Comentários</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Usuários</Text>
          </View>
        </View>
        <View style={styles.largeCard}>
          <Text style={styles.cardTitle}>Categorias</Text>
        </View>
      </View>
    );
  };

  