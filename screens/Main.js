
import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,  FlatList,ActivityIndicator, Dimensions,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppHeader } from '../components/Header';
//home component
export const Home =({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [header, setHeader ] = useState('flex');
  const cloudinary_url = 'https://res.cloudinary.com/www-uploadedstream-com/video/upload/v1584772774/'; 
  const cloudinary_image_url = 'https://res.cloudinary.com/www-uploadedstream-com/image/upload/v1584772774/'; 
  const { height, width } = Dimensions.get('window');
  const onPress = (page,item) => () => navigation.navigate(page,{data: item});
  useEffect(() => {
    fetch('https://uploaded.herokuapp.com/users/users?count='+count+'&type=feed&email=chjalome@gmail.com')
      .then((response) => response.json())
      .then((json) => setData([...data, ...json.Response]))
      .catch((error) => console.error(error))
      .finally(() => {setLoading(false); setCount(count+11)});
  },[page])
  return (
      <View style={styles.page}>
        <AppHeader display={header} title='Latest videos' subtitle='Stream and connect with the latest.'/>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ width:width - 10,height:400,marginTop:10,borderWidth:0.5,borderColor:'#000000',backgroundColor:'#000000',paddingBottom:10,borderRadius:5 }}>
                    <TouchableOpacity onPress={onPress('post',item)} style={{ width:null,height:null,flex:1}}>
                      <Image  style={{ width:null,height:null,flex:1,resizeMode:'cover' }} source={{uri:cloudinary_url+item.file+'.jpg'}}/>
                    </TouchableOpacity>

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
            onEndReached={()=>{
              setPage(page+1);
            }} onEndReachedThreshold ={10} onScrollBeginDrag={() => setHeader('none')}/>
        )}
      </View>
  );
};


const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center' ,
    backgroundColor:'#171717',

  },
});