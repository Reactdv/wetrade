
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"




Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();




import tw from "twrnc"


export default function Lowest
({navigation}) {
  
  
  return (
    
    <View style={container}>
    
    
    
  
   <TouchableOpacity>
   <Text>
   press me
   </Text>
   </TouchableOpacity>
    
    
    
    
    
    </View>
    
  );
}


//{=================STYLES================}


const container = tw`flex flex-auto items-center Justify-center bg-blue-400 `