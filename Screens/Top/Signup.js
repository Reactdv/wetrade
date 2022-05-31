
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import {Modal, KeyboardAvoidingView,ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import { Input } from "@rneui/themed";

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import tw from "twrnc"
import PhoneInput from 'react-native-phone-number-input';

import {TermsOfUse} from "./../../Components/TermsOfUse.js"
import {PrivacyPolicy} from "./../../Components/PrivacyPolicy.js"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();



 







export default function Signup ({navigation}){
  
  const [isEyePressed,setEyePress] = useState(false)
  const [isModalVisible,setModalVisibility] = useState(false)
const [isPrivacy,setIsPrivacy] = useState(false)
const [isSent,setIsSent] = useState(false)

const toggleTheModal =()=>{
setModalVisibility(visible => !visible)
}

const termsOfUse =()=>{

  return (
    <TouchableOpacity
onPress={()=> {
  
  return (
    
toggleTheModal(),
setIsPrivacy(false)
    )
}
}
>
      <Text
style={tw`text-blue-600 font-bold`}>
      Terms of use </Text>
  </TouchableOpacity> 
  );
}

const privacyPolicy =()=>{
  
  return (
    <TouchableOpacity
onPress={()=>
{
  return(
    
toggleTheModal(),
setIsPrivacy(true)
    )
  
}
}
>
      <Text
style={tw`text-blue-600 font-bold`}>
      Privacy policy </Text>
  </TouchableOpacity> 
  );
}


  return (
    
<View style={container}>

<Modal
visible={isModalVisible}>
<View style={container}>
<View style={[container,tw`flex flex-row items-center justify-start py-10`]}>
<TouchableOpacity
onPress={()=> setModalVisibility(false)}
>
<Ionicons
name="chevron-back"
size={30}
/>
</TouchableOpacity>
<Text style={tw`ml-20 font-bold text-lg`}>
 {isPrivacy?"Privacy policy": "Terms of use"}
</Text>
</View>
<View style={[container,tw`mt-2.5 `]}>



{isPrivacy?<PrivacyPolicy/>:<TermsOfUse/>}
  


</View>
</View>
</Modal>
 <View style={container}>

 <PhoneInput
    defaultCode="PH"
     textInputStyle={{fontSize:15,paddingVertical:10,paddingLeft:5}}
countryPickerButtonStyle={{backgroundColor:"none"}}
     />
   
  <Input
    rightIcon={
        <TouchableOpacity
onPress={()=>{
  setIsSent(send => !send)
}}
style={{position:"absolute",right:8,}}>
       <Text style={tw`text-xl text-blue-600`}>{isSent?"sent":"send"}</Text>
      </TouchableOpacity>
      }
    keyboardType="numeric"
    placeholder="OTP"
    autoFocus={true}
    style={tw.style('mx-1.5 my-2.5 p-1.5 pl-2.5 text-xl',{outline:"none",position:"relative"})} />
    
  <Input
  rightIcon={
        <TouchableOpacity
onPress={()=>{
  setEyePress(open => !open)
} }
style={{position:"absolute",right:8,}}>
        <Ionicons
name={isEyePressed?"eye-off-sharp":"eye-sharp"}
        size={30}
   style={tw`text-blue-600`}     
        />
      </TouchableOpacity>
      }
    placeholder="password"
    secureTextEntry={isEyePressed?false:true}
    autoFocus={true}
    style={tw.style('mx-1.5 my-2.5 p-1.5 pl-2.5 text-xl',{outline:"none", position:"relative"})} / >
    
    
    
 </View>
 <View 
 style={[container,{gap:10,flexDirection:"column",alignItems:"center",justifyContent:"flex-end"}]}>

<View>
<Text>
By clicking Signup or Sign in with facebook you confirm you have read or agree with our {termsOfUse()} and {privacyPolicy()}

</Text>
</View>

   <TouchableOpacity
style={solidBtn}>
     <Text
style={tw`text-2xl text-white font-bold`}>Sign up </Text>
    </TouchableOpacity>
    <TouchableOpacity
style={outlineBtn}>
     <Text
style={tw`text-lg text-blue-600 font-bold`}>Sign in with facebook </Text>
    </TouchableOpacity>
    


 </View >
</View>
    
  );
}


//{=================STYLES================}

const container = tw`flex flex-auto p-2.5 `

const solidBtn = tw.style("flex flex-row  bg-blue-600 w-full items-center justify-center  py-3 rounded-md")

const outlineBtn = 
tw.style("flex flex-row w-full items-center justify-center  rounded-md border-2 border-blue-600 py-3")
const header = tw`flex flex-auto `