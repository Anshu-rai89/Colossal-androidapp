import * as React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    StatusBar,
    Header
  
  
  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Lgradient (){
    const gradient = `linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%),
    repeating-linear-gradient(-115deg, transparent, transparent 20, rgba(255,255,255,0.1) 20, rgba(255,255,255,0.1) 40),
    repeating-linear-gradient(115deg, transparent, transparent 20, rgba(255,255,255,0.1) 20, rgba(255,255,255,0.1) 40)`; 

    return (
       
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
            
     
    )
}