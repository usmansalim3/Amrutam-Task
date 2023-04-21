import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'
import { EvilIcons, Ionicons, Octicons } from '@expo/vector-icons'
import { clearAppointmentNotification } from '../Redux/slices/BulletinSlice'
import { useDispatch } from 'react-redux'
const AppointmentCard = ({item,empty}) => {
  if(empty){
    return(
    <View style={{flexDirection:'row',alignItems:'center',width:'90%',padding:1,justifyContent:'space-between'}}>
        <Octicons name="checklist" size={26} color={Colors.green800} style={{marginHorizontal:10}} />
        <Text style={{fontSize:18,color:Colors.green500,left:10,bottom:2}}>No New Appointment</Text>
        <Text style={{color:Colors.green800,fontSize:16,left:25,bottom:2,fontWeight:'bold'}}>Book Now</Text>
    </View>
    )
  }
  const{icon,mode,doctor,date,time,id}=item
  const dispatch=useDispatch()
  return (
    <View style={{flexDirection:'row',alignItems:'center',width:'90%'}}>
        <Ionicons name={icon} size={26} color={Colors.green800} style={{marginRight:10}} />
        <View style={{width:'90%'}}>
            <Text style={{fontSize:18,color:Colors.green500,fontFamily:'DinNextLight',bottom:5}}>{mode} appointment on <Text style={{fontWeight:'bold'}}>{date}</Text> at <Text style={{fontWeight:'bold'}}>{time}</Text> with <Text style={{fontWeight:'bold'}}>{doctor}</Text></Text>
        </View>
        <EvilIcons name="close" size={20} color="#4e744f" style={{marginLeft:5}} onPress={()=>dispatch(clearAppointmentNotification(id))} />
    </View>
  )
}

export default AppointmentCard

const styles = StyleSheet.create({})