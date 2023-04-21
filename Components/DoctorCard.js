import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Button, Surface } from 'react-native-paper'
import Colors from '../Constants/Colors'

const DoctorCard = ({item}) => {
  const {name,img}=item
  return (
    <Surface style={{marginHorizontal:10,overflow:'hidden',borderRadius:10,backgroundColor:"#fff",justifyContent:'center',alignItems:'center',width:250}}>
        <View style={{padding:0,backgroundColor:Colors.lime,flex:1,width:'100%',justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Image source={{uri:img}} style={{height:250,width:250,borderRadius:10}}   />
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'DinNext',fontSize:20,color:Colors.green500,marginVertical:10}}>
                {name}
            </Text>
            <Button mode='contained' onPress={()=>{}} textColor={Colors.green500} style={{marginBottom:10,backgroundColor:Colors.green800,borderRadius:5}}>
                <Text style={{fontSize:16,color:'white'}}>Follow</Text>
            </Button>
        </View>
    </Surface>
  )
}

export default DoctorCard

const styles = StyleSheet.create({})