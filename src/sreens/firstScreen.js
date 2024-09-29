import { View, StyleSheet, Image } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const FirstScreen = ({navigation}) => {

  useFocusEffect(
    useCallback(() => {
      setTimeout(()=>{
        navigation.navigate('login');
     },1500);
    },[navigation])
  );

  useEffect(()=>{
        setTimeout(()=>{
           navigation.navigate('login');
        },1500);
    });
  return (
    <View style={style.container}>
      <Image style={style.image} source={require('../assets/images/login1.jpg')} />
    </View>
  );
};
const style = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
    },
    image:{
        height:'100%',
        width:'100%',
    },
});
export default FirstScreen;
