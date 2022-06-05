

import {View,Image} from "react-native"

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import Home from "./Home.js"
import Market from "./Market.js"
import Trade from "./Trade.js"
import Prime from "./Prime.js"
import Me from "./Me.js"


import tw from "twrnc"
const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs({navigation,user}) {
  return (
  <Tab.Navigator
  shifting={false}
  activeColor="#0013ff"
  inactiveColor="#a3abad"
barStyle={{ backgroundColor: '#ffffff' }}
   >
  
  <Tab.Screen
  name="Home"
  component={Home}
  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
         
         />
  
  <Tab.Screen
  navigation={navigation}
  name="Market"
  component={Market}
  options={{
          tabBarLabel: 'Market',
          tabBarIcon: ({ color }) => (
          <FontAwesome5 name="coins" size={24} color={color} />
          ),
        }}
  
    />
    

  
  <Tab.Screen
  name="Trade"
  component={Trade}
  options={{
          tabBarLabel: 'Trade',
          tabBarIcon: ({ color }) => (
         <FontAwesome name="exchange" size={26} color={color} />
          ),
        }}
  
  />

  <Tab.Screen
  name="Prime"
  component={Prime}
  options={{
          tabBarLabel: 'Prime',
          tabBarIcon: ({ color }) => (
          <Ionicons name="ios-star-half-outline" size={26} color={color} />
          ),
        }}
  />
  
  <Tab.Screen
  name="Me"
  component={Me}
  options={{
          tabBarLabel: 'Prime',
          tabBarIcon: ({ color }) => (
          <FontAwesome name="user" size={26} color={color} />
          ),
        }}
  />

  </Tab.Navigator>
 
  );
}