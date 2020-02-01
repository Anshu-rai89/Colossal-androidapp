import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  Header


} from 'react-native';
import Button from './components/button';
import TextCustom from './components/text';
import { LinearGradient } from 'expo-linear-gradient';
import Myheader from './components/myheader';
 
export default function App() {

  const gradient = `linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%),
  repeating-linear-gradient(-115deg, transparent, transparent 20, rgba(255,255,255,0.1) 20, rgba(255,255,255,0.1) 40),
  repeating-linear-gradient(115deg, transparent, transparent 20, rgba(255,255,255,0.1) 20, rgba(255,255,255,0.1) 40)`;

  return (

   
    <View style={styles.container}>
      <Myheader />
     <StatusBar backgroundColor="blue" barStyle="light-content" />
     <LinearGradient
          colors={['#2196f3', '#0ff2fe']}
          start={{x:0,y:0}}
          end={{x:1,y:1}}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            height:800
            
          }}
        />
  

 

    <Text style={styles.textstyle}> Welcome To Colossal</Text>

     
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
