import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar


} from 'react-native';
import Button from './components/button';
import TextCustom from './components/text';
import Gradient from 'react-native-css-gradient';
 
export default function App() {

  const gradient = `linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%),
  repeating-linear-gradient(-115deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px),
  repeating-linear-gradient(115deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`;

  return (

    
    <View style={styles.container}>
   
  <StatusBar backgroundColor="blue" barStyle="light-content" />
  <Gradient gradient={gradient} />

 

    <Text style={styles.textstyle}> Welcome To Colossal</Text>
    <View style={
      {
        borderBottomColor:"blue",
        borderBottomWidth:5,
        borderRadius:10
  
  
  }}/>
   
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  textstyle:
  {
    fontSize:35,
    marginTop:35,
    textAlign:'center',
    color:'#0000ff',
    fontWeight:'800'

  }
});
