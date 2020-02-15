import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  Header,




} from 'react-native';


import Myheader from '../components/myheader';
import {TextInput,Button} from 'react-native-paper';
import {Ionicons}  from '@expo/vector-icons';










const SignIn=()=> {

 


  return (

 
    <View style={styles.container}>
       <Myheader />
     <StatusBar backgroundColor="blue" barStyle="light-content" />
   
  
  
   
 

  <View style={{backgroundColor:'#2187C4',paddingTop:20,paddingBottom:40 ,paddingRight:50,paddingLeft:50,marginTop:100} }> 
   <Text style={styles.textstyle}>SignIn</Text>
    

   
    <TextInput  
   style={styles.textinputstyle}
      placeholder='Email'
    
    />
    <TextInput  
    style={styles.textinputstyle}
      placeholder='Password'
    
    />
   <Button style={{marginTop:20}} mode="contained" onPress={() => navigation.navigate('Signin')}>
    SignUp
  </Button>
    
   
  
  <Text style={{color:'white',fontSize:16,margin:5}} onPress={() => navigation.navigate('Signup')}>Dont have account ?</Text>
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
    color:"#ffffff",
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


export default SignIn;