
import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet,  FlatList,ActivityIndicator, Dimensions,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  AppHeader from '../components/Header';
//home component
export const Home =({navigation}) => {
  //
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://uploaded.herokuapp.com/users/users?type=feed&email=chjalome@gmail.com&count=10')
      .then((response) => response.json())
      .then((json) => setData(json.Response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  })
  const cloudinary_url = 'https://res.cloudinary.com/www-uploadedstream-com/video/upload/v1584772774/'; 
  const cloudinary_image_url = 'https://res.cloudinary.com/www-uploadedstream-com/image/upload/v1584772774/'; 
  const { height, width } = Dimensions.get('window');
  return (
      <View style={styles.page}>
        <Text style={{color:'white',fontSize:24,fontWeight:'700',alignSelf:'flex-start',marginLeft:15,marginTop:20}}>Latest videos</Text>
        <Text style={{color:'white',fontSize:15,alignSelf:'flex-start',marginLeft:15,marginTop:5}}>Stream and connect with the latest.</Text>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ width:width - 10,height:400,marginTop:10,borderWidth:0.5,borderColor:'#000000',backgroundColor:'#000000',paddingBottom:10,borderRadius:5 }}>
                   <Image style={{ width:null,height:null,flex:1,resizeMode:'cover' }} source={{uri:cloudinary_url+item.file+'.jpg'}}/>
                    <View style={{width:300,height:120,marginLeft:10,flexDirection: 'row'}}>
                       <Image style={{ width:40,height:40,resizeMode:'cover',marginTop:15,borderRadius:20 }} source={{uri:cloudinary_image_url+item.image+'.jpg'}}/>
                      <Text style={{color:'white',marginTop:20,lineHeight:20,marginLeft:10,fontSize:18}}>{item.username} {'\n'}
                        <Text style={{color:'white',fontSize:13}}>
                          {item.description}
                        </Text>{'\n'}
                        <Text style={{color:'grey',marginLeft:10,lineHeight:20,fontSize:13}}>
                          {item.genre}{'\n'}
                          <MaterialIcons name="place" color={'#fc8700'} size={15} />
                          {item.location}
                        </Text>
                      </Text>
                    </View>
                    <View style={{width:width-10,height:40,marginLeft:10,marginTop:30,flexDirection: 'row'}}>
                      <View style={{width:(width-10)/2,alignSelf:'flex-start',marginLeft:10,flexDirection: 'row'}}>
                          <MaterialIcons name="favorite-border" color={'#ffffff'} size={22} />
                          <Text style={{color:'white',marginLeft:2,fontSize:13}}>{item.like}</Text>
                          <MaterialIcons style={{marginLeft:10}} name="visibility" color={'#ffffff'} size={22} />
                          <Text style={{color:'white',marginLeft:2,fontSize:13}}>0</Text>
                        </View>
                        <View style={{width:(width-10)/2,justifyContent: 'flex-end',flexDirection: 'row'}}>
                          <Text style={{color:'white',marginRight:2,fontSize:13}}>0</Text>
                          <MaterialIcons style={{marginRight:50,}} name="comment" color={'#ffffff'} size={22} />
                        </View>
                    </View>
                </View>
            )}
          />
        )}
      </View>
  );
};

//search component
export const Search =({navigation}) => {
  return (
      <View>
      </View>
  );
};

//profile component
export const Notifications =({navigation}) => {
  return (
      <View>
      </View>
  );
};


//notification component
export const Profile =({navigation}) => {
  return (
      <View>
      </View>
  );
};



const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center' ,
    backgroundColor:'#171717',

  }

});