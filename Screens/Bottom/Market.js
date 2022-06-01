
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import tw from "twrnc"

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"




Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();





const topMovers = [
  
  {
    id:1,
    name: "TRXUSD",
    img: require("../../assets/images/tron.png"),
    price: "0.09042",
    percent:"10.50% ↑",
  },
  
  {
    id:2,
    name: "NEOUSD",
    img: require("../../assets/images/neousd.png"),
    price: "11.48",
    percent:"10.50% ↑",
  },
  
  {
    id:3,
    name: "AAVE",
    img: require("../../assets/images/AAVE.png"),
    price: "112.28",
    percent:"10.50% ↑",
  },
  
  {
    id:4,
    name: "ADAUSD",
    img: require("../../assets/images/ada.png"),
    price: "0.5651",
    percent:"10.50% ↑",
  },
  
  {
    id:5,
    name: "MKRUSD",
    img: require("../../assets/images/mkr.jpeg"),
    price: "1235.37",
    percent:"10.50% ↑",
  },
  
  {
    id:6,
    name: "XLMUSD",
    img: require("../../assets/images/xlm.png"),
    price: "0.13907",
    percent:"10.50% ↑",
  },
  
  {
    id:7,
    name: "XNG",
    img: require("../../assets/images/xng.png"),
    price: "8.681",
    percent:"10.50% ↑",
  },
  
  {
    id:8,
    name: "SOLUSD",
    img: require("../../assets/images/sol.png"),
    price: "42.62",
    percent:"10.50% ↑",
  },
  
  
  ]

export default function Market
({navigation}) {
  
  
  return (
    
<View style={container}>
  <View>
     <Text style={tw`text-lg font-extrabold`}> Top mover </Text>
     <ScrollView 
     showsHorizontalScrollIndicator={false}
     horizontal={true}style={[tw`flex flex-row flex-auto pt-2.5 h-auto`,{gap:10}]}>
     
        {
          topMovers.map(({id,name,img,price,percent})=>{
            return (
              
  <View key={id} style={[tw`rounded-md w-26 h-26 p-2.5 `,{marginRight:10,gap:5,borderWidth:1,borderColor:"#bac6c97c"}]}>
            <View style={tw`flex flex-row items-center justify-start`}>
           <Image style={{marginRight:5,width:20, height:20,borderRadius:10}}resizeMode="cover"source={img}/>
           <Text style={tw`text-md font-light`}>{name}</Text> </View>
           <Text>{price}</Text>
           <Text style={tw`text-md font-semibold text-green-500`}>
           {percent}</Text>
        </View>
              
              )
          })
          
        }
       
     </ScrollView>
     
  </View>  
</View>
    
  );
}


//{=================STYLES================}


const container = tw`flex  my-4 mx-2.5 `