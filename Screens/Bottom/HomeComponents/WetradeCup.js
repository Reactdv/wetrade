
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"




Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();




import tw from "twrnc"


export default function Wetrade
({navigation}) {
  
  
  return (
    
<View style={container}>
  <View style={tw`flex flex-row items-center justify-between py-2.5 px-2.5 w-full`}> 
   
       <TouchableOpacity
        onPress={()=>navigation.goBack()}>
    <Feather name="chevron-left" size={24} color="black" /> </TouchableOpacity>
    <Text style={tw`text-lg font-medium`}>Wetrade Cup </Text>
    <View style={[tw`py-1.5 px-1.5 border-blue-600 rounded-2xl`,{borderWidth:1}]}>
       <Text style={tw`text-blue-600 font-light text-sm`}>My prizes </Text>
    </View>
  </View> 

  <View style={tw`flex items-center Justify-center bg-indigo-600 w-full h-full  `}>
    <Text style={tw`tracking-widest text-3xl text-amber-400 font-extrabold`}>Wetrade Cup</Text>
    
    <Text style={tw`text-xl text-white font-bold`}>2022 season 1</Text>
  
    <Text style={tw`text-white text-2xl font-bold`}>May 9 - July 13</Text>
    <Image 
     style={[{width:200,height:200},tw`bg-gradient-to-b from-amber-200 to yellow-100`]}
     resizeMode="contain" 
      source={require("../../../assets/images/championship-cup.png")}/>
  </View>
</View>
    
  );
}


//{=================STYLES================}


const container = tw`flex flex-auto items-center Justify-center  `