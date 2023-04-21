import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native-paper'
import Colors from '../Constants/Colors'
import NotificationCard from '../Components/NotificationCard'
import Logo from '../assets/Svgs/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Bulletin = () => {
  const state=useSelector(state=>state.bulletin)
  const notifications=state.notifications
  if(notifications.length==0){
    return(
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <View style={{flexDirection:'row',marginHorizontal:15}}>
            <Button mode='contained' style={{borderRadius:5,backgroundColor:Colors.green800,flex:1,marginRight:3}}><Text style={{fontFamily:'DinNext'}}>Notifications</Text></Button>
            <Button mode='contained' style={{borderRadius:5,backgroundColor:Colors.green500,flex:1}}><Text style={{fontFamily:'DinNext'}}>Chats</Text></Button>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text style={{color:Colors.green800,fontSize:20}}>No New Notifications !</Text>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Logo/>
          </View>
          <Text style={{color:Colors.green800,fontSize:20,fontFamily:'DinNext'}}>Check this section later for updates</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <FlatList
      contentContainerStyle={{paddingHorizontal:10}}
      data={notifications}
      ListHeaderComponent={()=>{
        return(
          <View style={{flexDirection:'row',marginHorizontal:5}}>
            <Button mode='contained' style={{borderRadius:5,backgroundColor:Colors.green800,flex:1,marginRight:3}}><Text style={{fontFamily:'DinNext'}}>Notifications</Text></Button>
            <Button mode='contained' style={{borderRadius:5,backgroundColor:Colors.green500,flex:1}}><Text style={{fontFamily:'DinNext'}}>Chats</Text></Button>
          </View>
        )
      }}
      renderItem={({item})=><NotificationCard item={item} id={item.id}/>}
      />
      {/* <View style={{height:responsiveHeight(1)}}/> */}
      <View style={{width:'100%',height:10}}/>
    </View>
  )
}

export default Bulletin

const styles = StyleSheet.create({})