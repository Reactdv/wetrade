

import * as Linking from 'expo-linking';


import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, Button,StyleSheet, Text, View, Image} from 'react-native';

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Entypo } from '@expo/vector-icons';


import tw from "twrnc"

import Home from "./Screens/Bottom/Home.js"
import Market from "./Screens/Bottom/Market.js"
import Trade from "./Screens/Bottom/Trade.js"
import Prime from "./Screens/Bottom/Prime.js"
import Me from "./Screens/Bottom/Me.js"


import TopTabs from "./Screens/Top/TopTabs.js"

import BottomTabs from "./Screens/Bottom/BottomTabs.js"

import {CoinDetails} from "./Screens/Bottom/MarketComponents/CoinDetails.js"

import Welcome from "./Screens/Welcome.js"
import Hello from "./Screens/Hello.js"




const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();


const prefix = Linking.createURL('myapp://app');
const universal = Linking.createURL('https://app.example.com');


 
 const MyStack =({navigation})=>{
  return (
     
  <Stack.Navigator>

  
  <Stack.Screen
  navigation={navigation}
  name="BottomTabs"
  component={BottomTabs}
  options={{headerShown:false}}/>
  
   
  <Stack.Screen
  name="CoinDetails"
  component={CoinDetails}
  options={{headerShown:false}}/>

  
   </Stack.Navigator>
   )
 }



export default function App(){
  
const  config = {
    screens:{
     Welcome:"welcome",
     TopTabs:"toptabs",
     BottomTabs: "bottomtabs",
     
      
}
  }

  
  return (
    
     <NavigationContainer
linking={{
        prefixes: [universal],
        config
}}>

  <MyStack/> 
  
   </NavigationContainer>
    
    )
}