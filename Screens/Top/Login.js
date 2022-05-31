
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import { useLinkTo } from '@react-navigation/native'
import * as Linking from "expo-linking"

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import tw from "twrnc"

import { Input } from "@rneui/themed";
import PhoneInput from 'react-native-phone-number-input';

import {auth} from "./../../firebase-config.js"
import 
{signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"

const Url_C = "http://localhost:19006/bottomtabs";
 

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();







export const Login =({navigation})=> {
  const [isEyePressed,setEyePress] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [user, setUser] = useState({})
  
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  
  const handleLogin =()=>{
    return (
      
  signInWithEmailAndPassword(auth,email,password)    
 .then(()=>{
  return (
Linking.openURL(Url_C,{user}),
console.log(user)
    
    )
})
   .catch(()=> alert("failed")) 
      )
  }
  return (
    
<View style={mainContainer}>
 <View style={container}>
  <Input
    value={email}
    onChangeText={(text)=> setEmail(text)}
    style={tw`pl-1.5`}
    placeholder="Enter email" />

   
  <Input
    value={password}
  onChangeText={(text)=> setPassword(text)}
    secureTextEntry={isEyePressed?false:true}
     style={{position:"relative",marginTop:10}}
       placeholder="Enter password"
        style={tw`px-1.5`}
          rightIcon={
           <TouchableOpacity 
           onPress={()=>
          setEyePress(open => !open)
           }
  style={{position:"absolute",right:10}}>
   <Ionicons
    size={30}
    style={tw`text-blue-600`}
   name=
   {isEyePressed?"eye-off-sharp":"eye-sharp"}/>
  </TouchableOpacity>
}
   />
    <View 
    style={tw`flex flex-row-reverse`}>
    <View style={tw`flex flex-col`}>
   <TouchableOpacity>
    <Text style={tw`mb-1.5 text-blue-600 text-lg`}>Forget password ?</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={tw`flex flex-row items-center justify-center `}>
    <MaterialCommunityIcons
name="email-outline" size={25}/>
    <Text>Sign in with email </Text>
    </TouchableOpacity>
    </View>
</View>
 </View>
 <View style={[container,{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",gap:10}]}>
 
    <TouchableOpacity
onPress={()=>Linking.openURL(Url_C,{user})}
style={solidBtn}>
     <Text
style={tw`text-2xl text-white font-bold`}>Sign in </Text>
    </TouchableOpacity>
    <TouchableOpacity
onPress={()=> console.log(onAuthStateChanged)}
style={outlineBtn}>
     <Text
style={tw`text-lg text-blue-600 font-bold`}>Sign in with facebook </Text>
    </TouchableOpacity>
 </View>
</View>

    
  );
}


//{=================STYLES================}

const container = tw`flex flex-auto p-2.5 mb-2.5`
const mainContainer = tw`flex flex-auto`

const outlineBtn = 
tw.style("flex flex-row w-full items-center justify-center  rounded-md border-2 border-blue-600 py-3")

const solidBtn = tw.style("flex flex-row  bg-blue-600 w-full items-center justify-center  py-3 rounded-md")