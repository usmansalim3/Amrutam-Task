import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import { AntDesign, Feather, FontAwesome5, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Colors from './Constants/Colors';
import Store from './Screens/Store';
import Orders from './Screens/Orders';
import Consult from './Screens/Consult';
import Bulletin from './Screens/Bulletin';
import { Avatar, Badge } from 'react-native-paper';
import { useRef, useState } from 'react';
import Blogs from './Screens/Blogs';
import HomeStack from './Screens/HomeStack';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import BlogSlice from './Redux/slices/BlogSlice';
import { Provider, useSelector } from 'react-redux';
import BulletinSlice from './Redux/slices/BulletinSlice';
import { responsiveHeight } from 'react-native-responsive-dimensions';




function AppStack(){
  const state=useSelector(state=>state);
  const Tab = createBottomTabNavigator();
  const ref=useRef()
  return(
    <NavigationContainer ref={ref}>
    <Tab.Navigator screenOptions={{
      tabBarIconStyle:{
        top:3
      },
      tabBarStyle:{
        position:'relative',
        bottom:Platform.OS=='ios'?responsiveHeight(10):responsiveHeight(1),
        borderRadius:10,
        marginHorizontal:10,
        height:responsiveHeight(7),
        
      },
      tabBarInactiveTintColor:Colors.grey,
      tabBarActiveTintColor:Colors.green800,
      headerShadowVisible:false,
      headerTitle:"",
      headerLeft:({tintColor})=><MaterialCommunityIcons name="menu" size={36} color={Colors.green800} style={{marginLeft:10}} />,
      headerRight:()=>{
        return(
          <View style={{flexDirection:"row",marginRight:10,justifyContent:'center',alignItems:'center'}}>
            <AntDesign name="search1" size={26} color={Colors.grey} style={{marginRight:5}} />
            <View>
            <Badge
            visible={true}
            size={15}
            style={{ bottom:15, position: 'absolute',right:10,backgroundColor:Colors.green800, zIndex:1 }}
            >
              3
            </Badge>
            <SimpleLineIcons name="handbag" size={26} color={Colors.grey} style={{marginHorizontal:15}} />
            </View>
            <Avatar.Image size={32} source={{uri:"https://i.pravatar.cc/1000"}} style={{borderRadius:8}} />
          </View>
        )
      },
    }}>
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarIcon:({color})=><Feather name="sun" size={24} color={color} />,
        tabBarLabel:({focused})=><Text style={focused?styles.focusedLabelStyle:styles.labelStyle} >Home</Text>,
        headerShown:false
      }} />
      <Tab.Screen name="Store" component={Store} options={{
         tabBarIcon:({color})=><MaterialCommunityIcons name="storefront-outline" size={24} color={color} />,
         tabBarLabel:({focused})=><Text style={focused?styles.focusedLabelStyle:styles.labelStyle} >Store</Text>
      }} />
      <Tab.Screen name="Orders" component={Orders} options={{
         tabBarIcon:({color})=><FontAwesome5 name="list-alt" size={24} color={color}  />,
         tabBarLabel:({focused})=><Text style={focused?styles.focusedLabelStyle:styles.labelStyle} >Orders</Text>
      }} />
      <Tab.Screen name="Consult" component={Consult} options={{
         tabBarIcon:({color})=><Fontisto name="test-bottle" size={24} color={color} />,
         tabBarLabel:({focused})=><Text style={focused?styles.focusedLabelStyle:styles.labelStyle} >Consult</Text>
      }} />
      <Tab.Screen name="Bulletin" component={Bulletin} options={{
         tabBarIcon:({color})=>{
          return(
            <>
            {(state.bulletin.notifications.length!=0)&&<Badge 
            visible={true}
            size={15}
            style={{ top:-3, position: 'absolute',right:13,backgroundColor:Colors.green800 }}>{state.bulletin.notifications.length}
            </Badge>}
            <Ionicons name="md-flower-outline" size={24} color={color} />
            </>
          )},
          tabBarLabel:({focused})=><Text style={focused?styles.focusedLabelStyle:styles.labelStyle} >Bulletin</Text>,
          headerLeft:({tintColor})=><Ionicons name="arrow-back-circle-outline" size={32} color={Colors.green800} style={{marginLeft:5}} onPress={ref.current.goBack} />
      }} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  const reducer= combineReducers({
    blog:BlogSlice,
    bulletin:BulletinSlice
  })
  const store=configureStore({reducer})
  const[loaded]=useFonts({
    "DinNext":require("./assets/fonts/DIN-Next-LT-Arabic-Light.ttf"),
    "DinNextLight":require("./assets/fonts/DIN-Next-Light.ttf")
  })
  if(!loaded){
    return(
      <></>
    )
  }
  return (
    <Provider store={store}>
      <AppStack/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedLabelStyle:{fontFamily:'DinNext',fontSize:12,borderBottomWidth:3,borderColor:Colors.green800,bottom:1},
  labelStyle:{fontFamily:'DinNext',fontSize:12}
});
