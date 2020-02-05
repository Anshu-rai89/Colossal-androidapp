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
import {createAppContainer}  from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {TextInput} from 'react-native-paper';
import {Ionicons}  from '@expo/vector-icons';








const Signin=()=>
{

 


  return (

    
    <View style={styles.container}>
      <Myheader />
     <StatusBar backgroundColor="blue" barStyle="light-content" />
   
  
   <LGradient />
   
 

  <View style={{backgroundColor:'#2187C4',paddingTop:20,paddingBottom:40 ,paddingRight:50,paddingLeft:50,marginTop:100} }> 
   <Text style={styles.textstyle}>Signin</Text>
   

   
    <TextInput  
   style={styles.textinputstyle}
      placeholder='Email'
    
    />
    <TextInput  
    style={styles.textinputstyle}
      placeholder='Password'
    
    />
   
    
    <Button  mode='contained'/>
  
    </View>
     
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
  icon:
  {
    marginBottom:-45,
    zIndex:2,
    marginLeft:2,
    padding:3
  },
  textinputstyle:
  {
    height:30 ,
    width:200,
    padding:6,
    borderRadius: 4,
    marginTop:10,
    textAlign:'center'
  }


});
