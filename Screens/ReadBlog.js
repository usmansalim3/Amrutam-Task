import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import Colors from '../Constants/Colors';

const ReadBlog = () => {
  const route=useRoute();
  const {blogData}=route.params;
  const {author,content,date,img,title}=blogData
  return (
    <ScrollView style={{flex:1,backgroundColor:'#fff'}} contentContainerStyle={{paddingHorizontal:10}} overScrollMode='never'>
      <Image source={{uri:img.src}} style={{height:img.height,width:'100%',alignSelf:"center",minHeight:300,maxHeight:350,borderRadius:10}} />
      <Text style={{fontSize:20,fontWeight:'bold',color:Colors.green800,marginTop:10}}>{title}</Text>
      <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{color:Colors.grey,marginRight:30}}>{author}</Text>
        <Text style={{color:Colors.grey}}>{date}</Text>
      </View>
      <Text style={{fontFamily:'DinNext'}}>{content}</Text>
      <Text style={{fontStyle:'italic',color:Colors.green800,marginVertical:40,fontWeight:'bold'}}>Amrutam Community Projects</Text>
    </ScrollView>
  )
}

export default ReadBlog

const styles = StyleSheet.create({})