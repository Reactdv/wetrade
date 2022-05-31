
import React from "react"
import styled from "styled-components/native"
import {useState,useLayoutEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { Linking,ScrollView,FlatList,SafeAreaView,TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';

import {Login} from "./Login.js"

import Signup from "./Signup.js"



import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();



const Tab = createMaterialTopTabNavigator();



export default function AuthScreen
({navigation, }) {
  
  
  return (
 
    <Tab.Navigator>
    
    <Tab.Screen
    name="Signup"
    component={Signup}/>
    
    <Tab.Screen
    name="Login"
    component={Login}/>
    
    </Tab.Navigator>
 
  );
}


