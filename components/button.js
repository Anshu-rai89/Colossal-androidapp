import * as React from 'react';
import { Button } from 'react-native-paper';

const MyComponent = () => (
  <Button style={{marginTop:20}} mode="contained" onPress={() => console.log('Pressed')}>
    SignUp
  </Button>
);

export default MyComponent;