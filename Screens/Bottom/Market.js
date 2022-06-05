
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






const topMovers = [
  
  {
    id:1,
    name: "TRXUSD",
    img: require("../../assets/images/tron.png"),
    price: "0.09042",
    percent:"10.50% ↑",
  },
  
  {
    id:2,
    name: "NEOUSD",
    img: require("../../assets/images/neousd.png"),
    price: "11.48",
    percent:"10.50% ↑",
  },
  
  {
    id:3,
    name: "AAVE",
    img: require("../../assets/images/AAVE.png"),
    price: "112.28",
    percent:"10.50% ↑",
  },
  
  {
    id:4,
    name: "ADAUSD",
    img: require("../../assets/images/ada.png"),
    price: "0.5651",
    percent:"10.50% ↑",
  },
  
  {
    id:5,
    name: "MKRUSD",
    img: require("../../assets/images/mkr.jpeg"),
    price: "1235.37",
    percent:"10.50% ↑",
  },
  
  {
    id:6,
    name: "XLMUSD",
    img: require("../../assets/images/xlm.png"),
    price: "0.13907",
    percent:"10.50% ↑",
  },
  
  {
    id:7,
    name: "XNG",
    img: require("../../assets/images/xng.png"),
    price: "8.681",
    percent:"10.50% ↑",
  },
  
  {
    id:8,
    name: "SOLUSD",
    img: require("../../assets/images/sol.png"),
    price: "42.62",
    percent:"10.50% ↑",
  },
  
  
  ]
  
  
  
const Url_E ="http://localhost:19006/bottomtabs/Market/coindetails";
  
  
const Crypto =({navigation,athChange,high,low,Id,mc,Img,Name,symbol,Price,priceChange})=>{
  
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
  const [coins,setCoins] = useState([])
  const [trend,setTrend] = useState([])
  const [isloading,setLoading] = useState(false)
 
 

 
  useLayoutEffect(()=>{
    axios.get ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=30&page=1&sparkline=false ")
      .then((res) => {
        return (setCoins(res.data)
        
              
        )})
      .catch(error => alert(error))
      
  },[])
  
 useLayoutEffect(()=>{
   axios.get("https://api.coingecko.com/api/v3/search/trending")
   .then((res) => {
     return (
       setLoading(true),
     setTrend(res.coins)
    
     )})
   .catch(err => alert(err))
   .finally(()=> setLoading(false))
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
          
        topMovers.map(({id,name,price,percent,img})=>{
           
           return (
          
  <View key={id} style={[tw`rounded-md w-26 h-26 p-2.5 `,{marginRight:10,gap:5,borderWidth:1,borderColor:"#bac6c97c"}]}>
            <View style={tw`flex flex-row items-center justify-start`}>
           <Image style={{marginRight:5,width:20, height:20,borderRadius:10}}resizeMode="cover"source={img}/>
           <Text style={tw`text-md font-light`}>{name}</Text> </View>
           <Text>{price}</Text>
           <Text style={tw`text-md font-semibold text-green-500`}>
           {percent}</Text>
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



