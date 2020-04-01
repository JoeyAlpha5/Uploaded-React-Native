import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet,  FlatList,ActivityIndicator, Dimensions,Image} from 'react-native';
import Video from 'react-native-video';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
//profile component
export const Post =({navigation,route}) => {
    const { height, width } = Dimensions.get('window');
    const data = route.params.data;
    const cloudinary_url = 'https://res.cloudinary.com/www-uploadedstream-com/video/upload/v1584772774/'+data.file+'.mp4'; 
    useEffect(() => {
        console.log(route.params.data);
    });
    return (
        <View style={styles.post}>
           {/* top section */}
           <View style={[styles.playerVideo,{width:width,height:height/2}]}>
           <Video source={{uri: cloudinary_url }} 
                repeat={true}       
                ignoreSilentSwitch={"obey"}                          
                resizeMode={"cover"}           
                style={{width:width,height:height/2}} />
           </View>

           <View  style={[styles.playBottomSec,{width:width,height:height/2,marginTop:height/2}]}>
                <Text style={{color:'#fc8700',marginTop:10,fontWeight:'400',fontSize:20}}>{data.username}</Text>
                <Text style={{color:'#ffffff',marginTop:5,fontSize:15}}>{data.description}</Text>
                <View style={{flexDirection: 'row'}}>
                    <MaterialIcons style={{marginTop:45}} name="fast-rewind" color={'#ffffff'} size={30} />
                    <MaterialIcons style={{marginTop:30}} name="play-circle-filled" color={'#fc8700'} size={60} />
                    <MaterialIcons style={{marginTop:45}} name="fast-forward" color={'#ffffff'} size={30} />
                </View>
                <View>
                    <Progress.Bar style={{marginTop:20}} color={'#fc8700'} progress={0.3} width={300} />
                </View>
           </View>


        </View>
    );
};



const styles = StyleSheet.create({
    post:{
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        backgroundColor:'#171717',
    },
    playBottomSec:{
        backgroundColor:'#000000',
        top:0,
        flex:1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    playerVideo:{
        backgroundColor:'#000000',
        top:0,
        flex:1,
        justifyContent: 'center',
        position:'absolute'
    },
  
});