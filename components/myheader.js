


import * as React from 'react';
import { Appbar ,Avatar } from 'react-native-paper';
import {Ionicons}  from '@expo/vector-icons'

export default function Myheader() {
 

 
    return (
      <Appbar.Header style={{height:60,marginTop:30, width:360, backgroundColor:'blue',padding:10} }>
       <Ionicons  name='md-menu' size={34} color='white' style={{marginLeft:10}}/>
        <Appbar.Content
          title="Colossal"
        
        />
         <Avatar.Image size={40} source={require('../assets/anshu.jpg')} />
       
      </Appbar.Header>
    );
  }

 
