
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { SimpleLineIcons } from '@expo/vector-icons';



Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();


import news from "../../../assets/images/forex.png"
import icon from "../../../assets/images/icon.png"
import priceAnalysis from "../../../assets/images/price-analysis.png"

import tw from "twrnc"


const content = [
  
  { 
    id:1,
    date: "05-30-2022 13:21:39",
    txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: icon,
    name: "Notice"
  },
  
  { 
    id:2,
    date: "05-26-2022 11:21:39",
    txt:"Pellentesque a risus libero. Phasellus accumsan elit eu.",
    img: news,
    name:"Forex news"
  },
  
  { 
    id:3,
    date: "05-24-2022 07:18:39",
    txt:"Phasellus dolor elit, sodales ut mi a, facilisis.",
    img: priceAnalysis,
    name:"Price analysis"
  },
  
  
  { 
    id:3,
    date: "05-24-2022 07:18:39",
    txt:"Phasellus dolor elit, sodales ut mi a, facilisis.",
    img: priceAnalysis,
    name:"Price analysis"
  },
  
  
  { 
    id:3,
    date: "05-24-2022 07:18:39",
    txt:"Phasellus dolor elit, sodales ut mi a, facilisis.",
    img: priceAnalysis,
    name:"Price analysis"
  },
  
  
  { 
    id:3,
    date: "05-24-2022 07:18:39",
    txt:"Phasellus dolor elit, sodales ut mi a, facilisis.",
    img: priceAnalysis,
    name:"Price analysis"
  },
  
  
  { 
    id:3,
    date: "05-24-2022 07:18:39",
    txt:"Phasellus dolor elit, sodales ut mi a, facilisis.",
    img: priceAnalysis,
    name:"Price analysis"
  },
  
  
  
  ]

export default function TodoList 
({navigation}) {
  
  
  return (
    
<View style={container}>
  <Text style={tw`text-md font-bold`}>News and analysis</Text>
  <View style={tw`flex flex-row  p-1.5`}>  
   
     <Text style={tw` text-blue-600 py-2.5 px-1.5 w-auto bg-blue-200 mr-2.5 rounded-md`}>#Lessons</Text>
   
     <Text style={tw` text-blue-600 py-2.5 px-1.5 w-auto bg-blue-200 mr-2.5 rounded-md`}>#BTCUSD</Text>
   
     <Text style={tw` text-blue-600 py-2.5 px-1.5 w-auto bg-blue-200 mr-2.5 rounded-md`}>#USOIL</Text>
   
     <Text style={tw` text-blue-600 py-2.5 px-1.5 w-auto bg-blue-200 mr-2.5 rounded-md`}>#USDX</Text>
  </View>  
  
  
  {content.map(({name,txt,img,date,id})=>{
    return (
  <View key={id} style={tw`flex flex-col my-2.5`}>   
<View  style={[tw`w-full flex-row items-center justify-start`,{gap:10}]}>
     
     <Image resizeMode="cover"
     source={img}
     style={tw`w-10 h-10 rounded-full`}/>
        
        <View>
      <Text style={tw`text-md font-medium`}>{name}</Text>
     <Text style={tw`text-md font-light`}>
      {date}</Text> 
       </View>
       
     <View style={[tw`flex items-center justify-center  bg-amber-500 p-1.5`,{marginLeft:"auto"}]}>
       <SimpleLineIcons name="pin" size={17} color="white" />
       </View>
     </View>
  
  <View style={{gap:10}}>
    <Text>
       {txt}
      
    </Text>
  </View>
     
      </View>
      )
  })}

  
</View>
    
  );
}


//{=================STYLES================}


const container = tw.style("flex flex-col flex-auto w-full h-auto py-2.5",{gap:10})



