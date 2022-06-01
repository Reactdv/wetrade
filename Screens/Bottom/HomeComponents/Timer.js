
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"


import tw from "twrnc"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();








export default function Timer
({navigation}) {
  
  
  return (
    
<View style={container}>
  <View style={tw`flex flex-row w-full items-center justify-between`}>
     
    <Text style={tw`text-md font-bold`}>Upcoming events </Text>
    <View style={tw`flex flex-row items-center justify-center`}>
    <Text style={tw`text-stone-400 text-light`}>see more</Text>
    <Feather name="chevron-right" size={24} style={tw`text-stone-400`} />
    </View>
  </View>
  
  <View style={[tw`flex flex-row px-2.5 py-5   w-full items-center justify-start mr-auto`,{
      borderWidth:2,borderColor:"#bac6c97c"
  }]}>
  
    <View style={[tw`flex flex-row `,{gap:5}]}>
      <Text style={tw`text-white text-lg font-bold bg-stone-800 px-1`}>14</Text>
      
      <Text style={tw`text-white text-lg font-bold `}>:</Text>
      
      <Text style={tw`text-white text-lg font-bold bg-stone-800 px-1`}>30</Text>
      
      <Text style={tw`text-white text-lg font-bold `}>-</Text>
      
      <Text style={tw`text-white text-lg font-bold bg-stone-800 px-1`}>14</Text>
      
      <Text style={tw`text-white text-lg font-bold`}>:</Text>
      
      <Text style={tw`text-white text-lg font-bold bg-stone-800 px-1`}>14</Text>
      
      <Text style={tw`text-white text-lg font-bold `}>:</Text>
      
      <Text style={tw`text-white text-lg font-bold bg-stone-800 px-1`}>45</Text>
      <View style={tw`flex items-center Justify-center p-1 rounded-full bg-purple-600`}>
      <MaterialCommunityIcons name="cards-playing-outline" size={24}color="white"  />
      </View>
     
      <Text style={tw` text-xl `}>Gacha</Text>
      
    </View>
  </View> 
</View>
    
  );
}


//{=================STYLES================}


const container = tw`flex w-full items-center Justify-center `