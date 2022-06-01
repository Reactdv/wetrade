
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import * as Linking from 'expo-linking';

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"


import tw from "twrnc"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();



const Url_D =  "http://localhost:19006/bottomtabs/Home/WetradeCup"



export default function Home
({navigation}) {
  
  
  return (
    
 <View style={tw`mx-auto  w-full bg-indigo-600`}>
 
   
<ScrollView
    style={[tw` flex-wrap overflow-hidden  h-auto  `,{gap:0}]}
     horizontal={true}>
  
<TouchableOpacity
onPress={()=> {
  return (
navigation.navigate("WetradeCup")
 
    )
}}
style={tw`flex flex-row items-center justify-start w-96 `}>
    <Image
     style={tw`w-20 h-20`}
     resizeMode="contain"
     source={require("./../../../assets/images/championship-cup.png")}/>
     <View style={tw`ml-10`}>
     <Text style={tw`text-3xl text-amber-400 font-bold`}>Wetrade Cup</Text>
     <Text style={tw`text-white text-xl`}>May 9-July 13</Text> 
     </View>
    </TouchableOpacity>
  
   <TouchableOpacity 
   onPress={()=> {
  return (
navigation.navigate("Lowest")
 
    )
}}
   style={tw`flex flex-row items-center justify-start w-96 `}>
   <Image
    style={tw`w-24 h-24`}
    resizeMode="contain"
    source={require("./../../../assets/images/envelope.png")}/>
    <View style={tw`ml-5`}>
    <Text style={tw`text-white text-2xl font-bold`}>Lowest trading </Text>
    <Text style={tw`text-white text-2xl font-bold`}>cost in the world</Text>
    </View>
  </TouchableOpacity>
 
  <TouchableOpacity 
onPress={()=> {
  return (
navigation.navigate("FAQ")
 
    )
}}
  style={tw`flex flex-row items-center justify-start w-96  px-5`}>
    <Ionicons name="newspaper-outline" size={80} color="white" />
    <View style={tw`ml-2.5`}>
    <Text style={tw`text-white text-2xl font-bold`}>Newbie must Read</Text>
    </View>
  </TouchableOpacity>
</ScrollView>
    
  </View>
  
    
  );
}


//{=================STYLES================}


const container = tw`flex flex-auto items-center Justify-center  p-2.5 mx-auto  w-full bg-indigo-600 h-auto`