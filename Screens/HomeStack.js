import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Home from "./Home"
import { useFocusEffect } from '@react-navigation/native';
import Blogs from './Blogs';
import ReadBlog from './ReadBlog';
import { AntDesign, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Avatar, Badge } from 'react-native-paper';
import Colors from '../Constants/Colors';

const HomeStack = () => {
  const navigation=useNavigation();
  const stack=createNativeStackNavigator();
  return (
    <stack.Navigator screenOptions={{
      headerShadowVisible:false,
      headerTitle:"",
      headerLeft:({tintColor})=><MaterialCommunityIcons name="menu" size={36} color={Colors.green800} style={{right:6,top:0.2}} />,
      headerRight:()=>{
        return(
          <View style={{flexDirection:"row",justifyContent:'center',alignItems:'center',left:6}}>
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
        <stack.Screen component={Home} name='home'/>
        <stack.Screen component={Blogs} name='blogs' options={{
            freezeOnBlur:true,
            headerLeft:()=>(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="arrow-back-circle-outline" size={32} color={Colors.green800} style={{marginHorizontal:5}} onPress={navigation.goBack}/>
                    <Text style={{color:Colors.green800,fontSize:16}}>Amrutam Blogs</Text>
                </View>
            )
        }}/>
        <stack.Screen component={ReadBlog} name="readBlog" options={{
            headerLeft:()=>(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="arrow-back-circle-outline" size={32} color={Colors.green800} style={{marginHorizontal:5}} onPress={navigation.goBack}/>
                    <Text style={{color:Colors.green800}}>Amrutam Blogs</Text>
                </View>
            )
        }}/>
    </stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})