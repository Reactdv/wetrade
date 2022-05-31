
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import tw from "twrnc"

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"




Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();







export default function Me
({navigation}) {
  
  
  return (
    
    <View style={container}>
    
    
    
  
   <TouchableOpacity>
   <Text>
   me
   </Text>
   </TouchableOpacity>
    
    
    
    
    
    </View>
    
  );
}


//{=================STYLES================}


const container = tw`flex flex-auto items-center Justify-center `