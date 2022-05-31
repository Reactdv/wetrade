
import React from "react"
import styled from "styled-components/native"
import {useState,useEffect,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import tw from "twrnc"
import * as Linking from "expo-linking"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();




export default function Hello
({navigation}) {
  const [data,setData] = useState(null)
const handleDeeplink =()=>{
  let data = Linking.parse(event.url);
  setData(data)
}


  

  return (
    
    <View style={container}>
    
    
    
  
   <TouchableOpacity
onPress={()=>navigation.navigate("Signup")}>
   <Text>
   press me
   </Text>
   </TouchableOpacity>
    
    
    
    
    
    </View>
    
  );
}


//{=================STYLES================}


const container = tw`flex flex-auto items-center Justify-center `