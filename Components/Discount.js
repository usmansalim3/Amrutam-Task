import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Discount = ({price}) => {
  if(!price){
    return (
        <>
        </>
    )
  }
  return (
    <View>
      <Text style={{textDecorationLine:'line-through',textDecorationStyle: 'solid',fontSize:12,marginLeft:5,marginTop:3}}>₹{price}</Text>
    </View>
  )
}

export default Discount

const styles = StyleSheet.create({})