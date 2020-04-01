import React from 'react';
import {SafeAreaView,Animated,StyleSheet,ScrollView,View,Text,StatusBar,Image} from 'react-native';
export const AppHeader =(props) => {
  return (
      <Animated.View style={{alignSelf:'flex-start',display:props.display}}>
        <Text style={{color:'white',fontSize:24,fontWeight:'700',alignSelf:'flex-start',marginLeft:15,marginTop:20}}>{props.title}</Text>
  <Text style={{color:'white',fontSize:15,alignSelf:'flex-start',marginLeft:15,marginTop:5}}>{props.subtitle}</Text>
      </Animated.View>
  );
};

