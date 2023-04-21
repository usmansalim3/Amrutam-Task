
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  Surface } from 'react-native-paper'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import Colors from '../Constants/Colors'

const InfoCard = ({item}) => {
  const {iconRight,icon,boldMessage,helperMessage,message}=item
  return (
    <Surface style={{width:'99%',marginVertical:5,padding:20,borderRadius:10,alignSelf:'center',backgroundColor:'#fff',height:70}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <FontAwesome5 name={icon} size={26} color={Colors.green800} />
            <View>
                {helperMessage?<Text style={{fontSize:12}}>{helperMessage}</Text>:<></>}
                <Text style={{fontFamily:'DinNext',color:Colors.green500,fontSize:18,bottom:4}}>{message}<Text style={{fontWeight:'bold',color:Colors.green800}}>{boldMessage}</Text></Text>
            </View>
        <AntDesign name={iconRight} size={26} color={Colors.green800} onPress={()=>{}} />
        </View>
    </Surface>
  )
}


export default InfoCard

const styles = StyleSheet.create({})