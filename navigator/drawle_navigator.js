import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button


} from 'react-native';
import {createAppContainer}  from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomButton from '../components/button';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
    //   drawerIcon: ({ tintColor }) => (
    //     <Image
    //       source={require('./chats-icon.png')}
    //       style={[styles.icon, { tintColor: tintColor }]}
    //     />
    //   ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
    //   drawerIcon: ({ tintColor }) => (
    //     <Image
    //       source={require('./notif-icon.png')}
    //       style={[styles.icon, { tintColor: tintColor }]}
    //     />
    //   ),
    };
  
    render() {
      return (
          <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <CustomButton  onPress={()=>this.props.toggleDrawer} />
        </View>
      );
    }
  }
  
  
  
  const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });
  
  const MyApp = createAppContainer(MyDrawerNavigator);


  export default MyApp;