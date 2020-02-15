import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  Header,



} from 'react-native';
import Button from './components/button';
import TextCustom from './components/text';
import LGradient from './components/layout';
import Myheader from './components/myheader';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TextInput} from 'react-native-paper';
import {Ionicons}  from '@expo/vector-icons';
import SignUP from './screen/sigunup';
import SignIn from './screen/signin';





function Home({ navigation }) {
  return (
    <View >
      <Button
        title="Welcome"
      />
    </View>
  );
} 



const Stack = createStackNavigator();

function MyStack() {
  return (
    <>
    <Stack.Navigator  screenOptions={{
    headerShown: false
  }} >
   
      <Stack.Screen name="Signin" component={SignIn} />
      < Stack.Screen name="Signup" component={SignUP} />
      <Stack.Screen name="Home" component={Home} />
   
    </Stack.Navigator>
    </>
  );
}

export default function App() {

 
 
  return (

 
   <>
 
   <NavigationContainer>
      <MyStack />
    </NavigationContainer>
   
   </>
    
  );
}

 
