import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const FirstScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
           navigation.navigate('login');     
        },1500)
    },[])
  return ( 
    <View style={style.container}>
      <Image style={style.image} source={require('../assets/images/login1.jpg')} />
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"red"
    },
    image:{
        height:"100%",
        width:"100%",
    }
})
export default FirstScreen