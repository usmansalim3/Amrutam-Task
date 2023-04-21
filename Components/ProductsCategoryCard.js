import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import Colors from '../Constants/Colors'

const ProductsCategoryCard = ({item}) => {
  const {path,title}=item
  return (
    <View>
        <Surface style={{padding:15,backgroundColor:Colors.lime,borderRadius:5,marginHorizontal:10,margin:5}}>
            <Image source={path} style={{height:50,width:50}}/>
        </Surface>
        <Text style={{alignSelf:'center',fontFamily:"DinNext",bottom:5}}>{title}</Text>
    </View>
  )
}

export default ProductsCategoryCard

const styles = StyleSheet.create({})