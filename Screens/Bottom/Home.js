
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"


import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import * as Linking from 'expo-linking';



import tw from "twrnc"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();


import Header from "./HomeComponents/Header.js"
import Educ from "./HomeComponents/Educ.js"
import Timer from "./HomeComponents/Timer.js"
import Content from "./HomeComponents/Content.js"
import WetradeCup from "./HomeComponents/WetradeCup.js"
import FAQ from "./HomeComponents/FAQ.js"
import Lowest from "./HomeComponents/Lowest.js"


const Stack = createStackNavigator();

const prefix = Linking.createURL('myapp://app');
const universal = Linking.createURL('https://app.example.com');
 
const  config = {
    screens:{
     HomeStack:"homestack",
     WetradeCup:"wetradecup",
     Lowest:"lowest",
      FAQ:"faq",
      
}
  }

function HomeStack({navigation}) {
  
  
  return (
 <ScrollView>
   <View style={{display:"flex",flex:1, height:1000, padding:10}}> 
  <Header navigation={navigation}/>
  
  <Educ navigation={navigation}/>
  <Timer navigation={navigation}/>
  <Content />

 
 </View>   
</ScrollView>
  );
}

export default function Home(){
  return (
<Stack.Navigator 
linking={{
        prefixes: [universal],
        config
}}>
  

  <Stack.Screen
   name="HomeStack"
   component={HomeStack}
   options={{headerShown:false}}/> 
   
  <Stack.Screen
   name="WetradeCup"
   component={WetradeCup}
   options={{headerShown:false}}/> 
   
  
  <Stack.Screen
   name="Lowest"
   component={Lowest}
   options={{headerShown:false}}/> 
   
  <Stack.Screen
   name="FAQ"
   component={FAQ}
   options={{headerShown:false}}/> 
   
</Stack.Navigator>
    )
}
//{=================STYLES================}


const container = tw`flex items-center Justify-center  p-2.5`