
import React from "react"
import styled from "styled-components/native"
import {useState,useEffect,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View ,Image} from 'react-native';



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import tw from "twrnc"
import * as Linking from "expo-linking"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();

import {loginImages} from "./../Components/loginImages.js"

const images = loginImages

export default function Welcome
({ }) {
  
const Url_A = "myapp://app/welcome";
  const Url_B = "http://localhost:19006/toptabs";
  const Url_C = "https://app/bottomtabs";
 

  

  return (
    
<View style={container}>
    
  <View style={tw`flex flex-row justify-center items-center w-full h-max-content py-4 px-2.5`}>
  
  <Image
 style={{width:50,height:50,borderRadius:25}}
 resizeMode="contain"
 source={require("./../assets/images/icon.png")}
/>
  <Text
   style={tw`text-xl font-bold ml-2.5`}>
   Wetrade</Text>
  
  <TouchableOpacity
style={[tw`my-3 mx-2.5`,{marginLeft:"auto"}]}>
  
  <Text
style={tw`text-md font-bold ml-2.5`}>
Language</Text>
  
  </TouchableOpacity>
  </View>
   
  <View style={tw`pl-10`}>
  
<ScrollView
  style={tw` flex-wrap overflow-hidden w-64 h-auto`}
  horizontal={true}>
  
  {images.map(({id,image,text})=>{
    return (
      
  <View
style={tw` w-64 mr-2.5 overflow-hidden`}>
      <Image
       resizeMode="contain"
       style={tw`w-64 h-60`}
       key={id}
       source={image}/> 
       <Text
       style={tw`text-md font-bold`}>
        {text}
       </Text>
      </View>
      
      )
  })}
  </ScrollView>
  </View>
   
   <View
 style={[solidContainer,tw` pt-6`]}>
 <TouchableOpacity
onPress={()=> {
  return (
Linking.openURL(Url_B)
 
    )
}}
 style={solidBtn}>
  <Text style={txt}> Signup
  </Text> 
  <Text style={tw`text-white`}>
   within 10 minutes
  </Text> 
  
 </TouchableOpacity>
 
 <TouchableOpacity
 style={solidBtn}>
    <Ionicons name="logo-facebook"
    size={25}
    style={tw`bg-blue-600 text-white`}/>
    <Text style={txt}>
     Signin with facebook
    </Text>
 </TouchableOpacity>
 </View>
  
 <View
 style={clearBtnContainer}>
  <TouchableOpacity

  style={tw`flex flex-auto items-center justify-center border-r-2`}> 
  <Text>Signin</Text>
  </TouchableOpacity> 
  <TouchableOpacity
  style={tw`flex flex-auto items-center justify-center`}> 
  <Text>Try now</Text>
  </TouchableOpacity> 
 </View>
   
   
</View>
    
  );
}


//{=================STYLES================}


const container = tw`flex flex-auto p-2.5`




const solidBtn = tw`flex flex-row bg-blue-600 w-full h-3.5 items-center justify-center mt-2.5 py-7 rounded-md`

 const txt = tw` font-bold text-lg text-white pr-1 `

const solidContainer = tw`flex flex-col flex-auto items-center justify-end w-full pb-2.5  `

const clearBtnContainer = tw`flex flex-row
 items-center justify-center w-full py-6`
