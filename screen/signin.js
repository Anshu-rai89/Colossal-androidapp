import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  Header


} from 'react-native';
import Button from '../components/button';
import TextCustom from '../components/text';
import { LinearGradient } from 'expo-linear-gradient';
import Myheader from '../components/myheader';
import Lgradient from '../components/layout';
 
export default function App() {

  

  return (

   
    <View style={styles.container}>
      <Myheader />
     <StatusBar backgroundColor="blue" barStyle="light-content" />
     
  

    <Lgradien />

    <Text style={styles.textstyle}> SignIn</Text>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
  },

  textstyle:
  {
    fontSize:35,
    marginTop:35,
    textAlign:'center',
    color:'#fff',
    fontWeight:'800'

  },


});
