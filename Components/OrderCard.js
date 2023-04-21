import {  StyleSheet, Text, View, Image,} from 'react-native'
import React from 'react'
import { Button, Surface } from 'react-native-paper'
import { Entypo } from '@expo/vector-icons'
import Colors from '../Constants/Colors'
import Discount from './Discount'

const OrderCard = ({item}) => {
  const {title,priceBefore,price,path}=item
  return (
    <Surface style={{backgroundColor:"#fff",borderRadius:5,marginHorizontal:10,margin:5,flexDirection:'row'}}>
        <Image source={path} style={{height:100,width:100,borderBottomLeftRadius:3,borderTopLeftRadius:3}}/>
        <View style={{marginHorizontal:10,paddingVertical:10}}>
            <View style={{flex:1,maxWidth:200}}>
                <Text numberOfLines={3}>{title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:Colors.green800,fontWeight:'bold',marginRight:5,fontSize:16}}>₹{price}</Text>
                    <Discount price={priceBefore}/>
                </View>
            </View>
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-start'}}>
                <Button  onPress={()=>{}} icon={"cart-outline"} textColor={Colors.green500}>
                    <Text style={{fontSize:16,color:Colors.green800}}>Reorder</Text>
                </Button>
            </View>
        </View>
    </Surface>
  )
}

export default OrderCard

const styles = StyleSheet.create({})