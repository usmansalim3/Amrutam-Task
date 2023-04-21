import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../Constants/Colors';


const ReactionSlider = () => {
  const[val,setVal]=useState(0);
  const [visible,setVisible]=useState(true);
  if(!visible){
    return (
      <></>
    )
  }
  return (
    <View style={{backgroundColor:Colors.lime,width:"100%",borderRadius:6,paddingHorizontal:20,paddingVertical:15}}>
      <EvilIcons name="close" size={20} color="#4e744f" style={{position:'absolute',right:10,top:10}} onPress={()=>setVisible(false)} />
      <View style={{marginVertical:5}}>
      <Text style={{color:Colors.green500,fontFamily:'DinNext',fontSize:20}}>How are you <Text style={{fontWeight:'bold',color:Colors.green800}}>feeling</Text> today?</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:0}}>
        <MaterialCommunityIcons name="emoticon-sad-outline" size={24} color={val==0?Colors.green800:Colors.green500} />
        <MaterialCommunityIcons name="emoticon-neutral-outline" size={24} color={val==0.3499999940395355?Colors.green800:Colors.green500} />
        <MaterialCommunityIcons name="emoticon-outline" size={24} color={val==0.699999988079071?Colors.green800:Colors.green500} />
        <MaterialCommunityIcons name="emoticon-wink-outline" size={24} color={val==1?Colors.green800:Colors.green500} />
      </View>
      <Slider
      style={{width:'105%',marginTop:10,left:-10}}
      minimumValue={0}
      maximumValue={1}
      thumbTintColor='#3a643b'
      minimumTrackTintColor="#6a896a"
      maximumTrackTintColor="#3a643b"
      step={0.35}
      value={val}
      onValueChange={(val)=>setVal(val)}
      />
      
    </View>
  )
}

export default ReactionSlider

const styles = StyleSheet.create({})