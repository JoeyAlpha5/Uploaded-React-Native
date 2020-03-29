import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Image} from 'react-native';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
const AppHeader =(props) => {
  return (
      <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height:60,
    padding:15,
    backgroundColor:'#000000',
  },
  text:{
    color:'#ffffff',
    fontSize:20,
    textAlign:'left',
    marginLeft:15,
  }

});

export default AppHeader;
