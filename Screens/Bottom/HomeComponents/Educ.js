
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { FontAwesome5 } from '@expo/vector-icons';

import tw from "twrnc"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();







export default function Educ
({navigation}) {
  
  
  return (
     
<View style={container}>
  <TouchableOpacity style={[tw`flex flex-row items-center Justify-center  py-3 px-2.5`,{gap:15,borderRadius:10,
      borderWidth:2,borderColor:"#bac6c97c"}]}>
    <FontAwesome5 name="medal" size={24} color="white" style={tw`bg-blue-600 rounded-full p-1.5`}/>
    <View >
    <Text style={tw`text-stone-800 text-md font-bold`}>Leaderbords</Text>
    <Text>Daily to order</Text>
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity style={[tw`flex flex-row items-center Justify-center border-2 border-zinc-400 py-3 px-2.5`,{gap:15,borderRadius:10, borderWidth:2,borderColor:"#bac6c97c"
  }]}>
    <Feather name="book-open" size={24} color="white" style={tw`bg-orange-500 rounded-full p-1.5`}/>
    <View>
     <Text style={tw`text-stone-800 text-md font-bold`}>
     Education</Text>
     <Text>FAQ & tutorials</Text>
     </View>
  </TouchableOpacity>
</View>
    
  );
}


//{=================STYLES================}


const container = tw.style("flex flex-row items-center   py-4 mx-auto  w-full   my-2.5",{justifyContent:"space-between"})