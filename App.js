import { StyleSheet, Text, View } from 'react-native';
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

// IMPOT OF SCREENS
import Login from './components/Login/Index';
import Cadastro from './components/Cadastro/Index';
import Home from './components/Home/Index';



function DrawerCuston(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Fechar"
        onPress={() => props.navigation.closeDrawer()}
        style={{ backgroundColor: '#FD5671' }}
        labelStyle={{ color: 'white', textAlign: 'center' }}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerCuston {...props} />}> 
          <Drawer.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Drawer.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

