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

function DrawerCuston(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Fechar"
        onPress={() => props.navigation.closeDrawer()}
        style={{ backgroundColor: 'black', color: 'white', }}
      />
    </DrawerContentScrollView>
  );
}



export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerCuston {...props} />}> 
          <Drawer.Screen name="LoginScreen" component={Login} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

