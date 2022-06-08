
import React from "react"
import styled from "styled-components/native"
import {useState,useEffect,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { Dimensions,ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import * as Linking from "expo-linking"

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import axios from "axios"

import { Line } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();


import tw from "twrnc"



const LineChart =({mc,symbol,spark})=>{
  let delayed;
  
  return (
    
    <Line data={{
      labels:[
        "02:00",
        "14:00",
        "02:00",
        "14:00",
        "02:00",
        "14:00",
        "02:00",
       
        ],
        datasets:[{
          label: symbol.toUpperCase(),
          data:spark.map((item)=> item),
          fill: true,
        }]
      
    }}
     options={{
       tension:0.3,
       radius:2,
       responsive:true,
       pointBackgroundColor: "black",
       backgroundColor:"#999999",
       borderColor:"#rgb(29,31,29)",
animation: {
onComplete: () =>{
delayed = true;
},

delay: (context) => {
let delay = 0;
if (context.type === "data" && context.mode === "default" && !delayed) {
delay = context.dataIndex * 300+ context.datasetIndex * 100;
}
return delay;
},
},
       scales:{
         y:{
           ticks:{
             callback:(value)=>  "$" + value
           }
         }
       }
     }}/>
    )
}



export const CoinDetails =
({mc,spark,navigation,athChange,priceChange,low,high,Price,symbol,setIsVisible})=> {
  
 
  
 
  
  return (
    
   
    <View style={container}>
    
    <View style={tw`flex flex-row items-center Justify-center w-full`}>
    <View style={tw`flex flex-auto flex-row items-center justify-between w-3/5 p-2.5 pr-6 `}>
    <TouchableOpacity
onPress={()=> setIsVisible(false)}>
  <View>
  <Feather name="chevron-left" size={35} color="black" />
   </View>
   </TouchableOpacity> 
   
     <Text style={tw`text-lg font-medium`}>{symbol.toUpperCase()}</Text>
     </View>
    
     <View style={tw`flex flex-auto flex-row items-center justify-end w-2/5 p-2.5 `}>
     <Text style={tw` text-md font-medium  text-stone-400`}>Watchlist </Text>
    <View>
     <AntDesign name="minuscircleo" size={15} style={tw`text-stone-400`} /> 
     </View>
     </View>
     
     </View>
     <View style={tw` flex flex-row w-full`}>
     
     <View style={[tw`flex flex-row w-1/2 items-center justify-start`,{gap:7}]}>
     <Text style={txt}>
     {high.toLocaleString()}</Text>
     <Text style={txt}>{low.toLocaleString()}</Text>
     </View>
     <View style={[tw`flex flex-row w-1/2 items-center justify-end`,{gap:5}]}>
     <Text style={[change,{color:athChange < 0? "red" : "green"}]}>{athChange.toFixed(2)}</Text>
     <Text style={[change,{color:priceChange<0? "red" : "green"}]}>{priceChange.toFixed(2)}%</Text>
     </View>
     
     </View>
      <View style={tw` w-full flex flex-auto flex-col `}>
   
   
     <LineChart 
     mc={mc}
     symbol={symbol}
     spark={spark}/>  


      </View>
     
    </View>
  );
}


//{=================STYLES================}


const container = tw`flex flex-auto items-center Justify-center  p-2.5`


const txt = tw`text-lg font-light text-red-500`

const change = tw`text-lg font-light `