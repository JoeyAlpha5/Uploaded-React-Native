
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {homeStackScreen,searchStackScreen,notificationStackScreen,profileStackScreen} from './navigationStacks/navigation';
//navigation stack
const Tab = createBottomTabNavigator();
const App =({navigation}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
           tabBarOptions={{
            activeTintColor: '#fc8700',
            inactiveTintColor: '#ffffff',
            keyboardHidesTabBar:true,
            borderWidth: 0, 
            style:{
              backgroundColor:"#000000",
              borderTopWidth:0,
            }
          }}>
        <Tab.Screen name="home" component={homeStackScreen} options={{tabBarLabel:"Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
      }}/>
        <Tab.Screen name="search" component={searchStackScreen} 
          options={{tabBarLabel:"Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="notifications" component={notificationStackScreen} options={{tabBarLabel:"Notifications",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="profile" component={profileStackScreen} options={{tabBarLabel:"Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
    </NavigationContainer>

  );
};
export default App;
