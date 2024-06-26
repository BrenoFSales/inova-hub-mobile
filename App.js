import { StyleSheet, Text, View, Image } from 'react-native';
import Styles from './assets/Styles';

import { LinearGradient } from 'expo-linear-gradient'; // Background linear gradient

/* ------------------------------------------------------------------------------------- */
import { NavigationContainer } from '@react-navigation/native'; // Imports of navigation
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'; // Drawer Navigator

import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Stack Navigator
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
/* ------------------------------------------------------------------------------------ */

// IMPORT OF SCREENS
import Login from './components/Screens/Login/Index';
import Cadastro from './components/Screens/Cadastro/Index';
import Home from './components/Screens/Home/Index';
import Perfil from './components/Screens/Perfil/Index';
import NovoPost from './components/Screens/NewPost/Index';
import Idiomas from './components/Screens/Idiomas/Index';
import Dashboard from './components/Screens/Dashboard/Index';
import Comentarios from './components/Screens/Comentarios/Index';
import Ideia from './components/Screens/Ideia/Index';


import CustomHeader from './components/CustomHeader/Index';

import { PostsProvider } from './components/PostsContext/Index'; // Contexto para acessar o dataset e posts
import { LoginsProvider } from './components/LoginContext/Index';


function DrawerCuston(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={Styles.drawerHeader}>
        <Image 
          source={require('./assets/images/logo.png')}
          style={Styles.logo}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Fechar"
        onPress={() => props.navigation.closeDrawer()}
        style={{ backgroundColor: '#FD5671' }}
        labelStyle={{ color: 'white', textAlign: 'center',fontWeight: 'bold'}}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LoginsProvider>
      <PostsProvider>
        <Drawer.Navigator drawerContent={props => <DrawerCuston {...props} />}
        screenOptions={({ route }) => ({
          header: () => <CustomHeader title={route.name} />,
          drawerPosition: 'right',
        })
        }
        > 
          <Drawer.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Drawer.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Perfil" component={Perfil} />
          <Drawer.Screen name="Novo Post" component={NovoPost} />
          <Drawer.Screen name="Ideia" component={Ideia} />
          <Drawer.Screen name="Comentarios" component={Comentarios} />
          <Drawer.Screen name="Idiomas" component={Idiomas} />
          <Drawer.Screen name="Dashboard" component={Dashboard} />
        </Drawer.Navigator>
      </PostsProvider>
      </LoginsProvider>
    </NavigationContainer>
  );
}
