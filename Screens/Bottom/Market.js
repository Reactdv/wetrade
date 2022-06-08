
import React from "react"
import styled from "styled-components/native"
import {useMemo,useState,useEffect,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import {Modal,Image, ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import tw from "twrnc"
import axios from "axios"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { Entypo } from '@expo/vector-icons';
import Ionicons from "react-native-vector-icons/Ionicons"

import * as Linking from "expo-linking"

import { useLinkTo, useLinkProps } from '@react-navigation/native';

import {CoinDetails} from "./MarketComponents/CoinDetails.js"




Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();



  
const Url_E ="http://localhost:19006/bottomtabs/Market/coindetails";
  
  
const Crypto =({navigation,spark,athChange,high,low,Id,mc,Img,Name,symbol,Price,priceChange})=>{
  
  const [isVisible, setIsVisible] = useState(false)
  return (
    
<TouchableOpacity  
onPress={()=> {
  return (

setIsVisible(true)
    )
}}

style={tw`flex flex-row items-center justify-between my-2.5`}
key={Id}>

     <Modal visible={isVisible}>

       <CoinDetails 
        mc={mc}
        spark={spark}
       athChange={athChange}
       priceChange={priceChange}
       high={high}
       low={low}
       setIsVisible={setIsVisible}
       Price={Price}
       symbol={symbol}/>

     </Modal>
   <View style={tw`flex flex-row items-center justify-start p-1.5`}>
   <Image 
   style={{width:50, height:50,borderRadius:25}}
   resizeMode="contain"
   source={Img}/>
  <Text style={tw`text-lg ml-1.5`}>{Name}</Text> 
  </View>
        <View style={{gap:5}}>      
        <Text>₱ {Price.toLocaleString()}</Text>
        <Text>₱{mc.toLocaleString()}</Text>
        <Text 
        style={{color:priceChange < 0?"red":"green"}}>
        {priceChange.toFixed(2)}%</Text> 
        </View>
    
</TouchableOpacity>
    
    )
}
  

export default function Market
({navigation}) {
  
  const [altCoins,setAltCoins] = useState([])
  const [coins,setCoins] = useState([])
  const [trend,setTrend] = useState([])
  const [isloading,setLoading] = useState(false)
 
 
  useLayoutEffect(()=>{
    axios.get ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=30&page=1&sparkline=true ")
      .then((res) => {
        return (setCoins(res.data)
        
              
        )})
      .catch(error => alert(error))
      
  },[])
  
  useEffect(()=>{
    
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=9&page=30&sparkline=false")
    .then(res => setAltCoins(res.data))
    
    .catch(err => alert(err))
  },[])
 
 

 

 
  
  return (
    
<View style={container}>
  <View>
     <View><Text style={tw`text-lg font-extrabold`}> Top mover </Text>
     </View>
     <ScrollView 
     showsHorizontalScrollIndicator={false}
     horizontal={true}style={[tw`flex flex-row flex-auto pt-2.5 h-auto`,{gap:10}]}>
     
         {
          
        altCoins.map(({id,image,symbol,current_price,price_change_percentage_24h})=>{
        const change = price_change_percentage_24h > 0? "green" : "red"
        
           return (
          
  <View 
  key={id} style={[tw`rounded-md w-26 h-26 p-2.5 `,{marginRight:10,gap:5,borderWidth:1,borderColor:"#bac6c97c"}]}>
            <View style={tw`flex flex-row items-center justify-start`}>
           <Image style={{marginRight:5,width:20, height:20,borderRadius:10}}resizeMode="cover"source={image}/>
           <Text style={tw`text-md font-light`}>{symbol.toUpperCase()}</Text> </View>
           <Text>{current_price}</Text>
           <Text style={[tw`text-md font-semibold`,{color:change}]}>
           {price_change_percentage_24h}%</Text>
        </View> 
        
              
              )
          })
          
        }

     </ScrollView>
   <View> <Text style={tw`text-lg font-medium`}>Markets</Text>
   </View>
  </View>  
  <View style={tw` flex pb-10 h-[450px] w-full`}>
  
  <ScrollView 
  showsHorizontalScrollIndicator={false}
  style={tw`w-auto h-auto`}>
   
   {coins.map((coins)=>{
     return(
       
       <Crypto 
        spark={coins.sparkline_in_7d.price}
       athChange={coins.ath_change_percentage}
       high={coins.high_24h}
       low={coins.low_24h}
       Id={coins.id}
       Name={coins.name}
       Price={coins.current_price}
       Img={coins.image}
       symbol={coins.symbol}
       mc={coins.market_cap}
       priceChange={coins.price_change_percentage_24h}
       />

       )
   })}
   
   </ScrollView>
   
</View>
  
  
  
</View>
    
  );
}


//{=================STYLES================}


const container = tw`flex  my-4 mx-2.5 `



