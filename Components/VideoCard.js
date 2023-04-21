import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Video,ResizeMode } from 'expo-av'
import { Surface } from 'react-native-paper'
import Colors from '../Constants/Colors'

const VideoCard = ({item}) => {
  return (
    <Surface style={{marginHorizontal:10,borderRadius:10,overflow:'hidden',backgroundColor:Colors.green800,maxWidth:250,maxHeight:400}}>
        <View>
            <Video source={{uri:item.uri}} style={{height:250,minWidth:200}} resizeMode={ResizeMode.COVER} shouldPlay={true} usePoster PosterComponent={()=><Image source={require("../assets/Placeholder.png")} />} posterStyle={{height:250,width:220,alignSelf:'center'}}  isMuted useNativeControls isLooping 
             />
        </View>
        <View style={{padding:10,justifyContent:'center',alignItems:'center',maxWidth:250,maxHeight:150}}>
            <Text numberOfLines={3} style={{fontSize:20,fontFamily:'DinNext',color:'white',textAlign:'center'}}>{item.title}</Text>
        </View>
    </Surface>
  )
}

export default VideoCard

const styles = StyleSheet.create({})