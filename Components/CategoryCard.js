import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import Colors from '../Constants/Colors'

const CategoryCard = ({item,index}) => {
  const {title,img}=item
  return (
    <Surface style={{marginHorizontal:10,overflow:'hidden',borderRadius:10,backgroundColor:"#fff",justifyContent:'center',alignItems:'center',height:150,width:150}}>
        <View style={{padding:10,backgroundColor:Colors.lime,flex:1,width:'100%',justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Image source={img} style={{height:50,width:50}} />
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'DinNext',fontSize:16,color:Colors.green500}}>
                {title}
            </Text>
        </View>
    </Surface>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})