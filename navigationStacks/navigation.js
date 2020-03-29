
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,Search, Notifications, Profile } from '../screens/Main';

//page stacks
const homeStack = createStackNavigator();
const searchStack = createStackNavigator();
const notificationStack = createStackNavigator();
const profileStack = createStackNavigator();

//stack content
export const homeStackScreen =() => {
  return(
    <homeStack.Navigator screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#000000' },
    }}>
      <homeStack.Screen name="home" component={Home} options={{title:"Home"}}/>
    </homeStack.Navigator>
  );
};
export const searchStackScreen =() => {
  return(
  <searchStack.Navigator screenOptions={{
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#000000' },
  }}>
      <searchStack.Screen name="search" component={Search} options={{title:"Search"}}/>
  </searchStack.Navigator>
  )
};
export const notificationStackScreen =() => {
  return(
    <notificationStack.Navigator screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#000000' },
    }}>
      <notificationStack.Screen name="notifications" component={Notifications} options={{title:"Notifications"}}/>
    </notificationStack.Navigator>
  )
};
export const profileStackScreen =() => {
  return (
    <profileStack.Navigator screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#000000' },
    }}>
      <profileStack.Screen name="profile" component={Profile} options={{title:"Profile"}}/>
    </profileStack.Navigator>
  )
};