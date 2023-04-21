import {  StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'
import { Button,Surface } from 'react-native-paper'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'


const BlogCard = ({item}) => {
  const{blog,img}=item;
  return (
    <Surface style={{backgroundColor:"#fff",borderRadius:10,overflow:'hidden',marginHorizontal:10,margin:5,flexDirection:'row'}}>
        <View style={{width:responsiveWidth(40),padding:5,justifyContent:"space-between",maxHeight:175}}>
            <Text style={{fontFamily:'DinNext',fontSize:responsiveFontSize(2),marginBottom:3}} numberOfLines={3}>{blog}</Text>
            <View>
            <Button onPress={()=>{}} mode='contained' style={{borderRadius:5,backgroundColor:Colors.green800,width:'80%'}}><Text style={{fontFamily:'DinNext'}}>Read more</Text></Button>
            <Text style={{fontFamily:'DinNext'}}> 06 Dec 2022</Text>
            </View>
        </View>
        <View>
             <Image source={img} style={{width:175,height:175}}/>
        </View>
    </Surface>
  )
}

export default BlogCard

const styles = StyleSheet.create({})