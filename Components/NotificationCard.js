import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MD2Colors, Surface } from 'react-native-paper'
import { MaterialCommunityIcons,EvilIcons } from '@expo/vector-icons'
import Colors from '../Constants/Colors'
import { useDispatch } from 'react-redux'
import { clearNotification } from '../Redux/slices/BulletinSlice'

const NotificationCard = ({item,id}) => {
  const dispatch=useDispatch();
  
  const {icon,message,date,alert}=item
  return (
    <Surface elevation={1} style={{height:100,flexDirection:'row',backgroundColor:'#fff',marginVertical:10,padding:10,borderRadius:5,alignItems:'center'}}>
        <MaterialCommunityIcons name={icon} size={45} color={alert?MD2Colors.red600:Colors.green800} style={{marginRight:5}}  />
        <View style={{width:'80%'}}>
        <Text style={{fontFamily:'DinNext',fontSize:16}}>{message}</Text>
        <Text style={{fontFamily:'DinNext',marginBottom:5}}>{date}</Text>
        </View>
        <EvilIcons name="close" size={28} color="#4e744f" onPress={()=>dispatch(clearNotification(id))}/>
    </Surface>
  )
}

export default NotificationCard

const styles = StyleSheet.create({})