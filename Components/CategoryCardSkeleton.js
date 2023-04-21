import { StyleSheet } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed';


const CategoryCardSkeleton = () => {
  return (
    <>
    <Skeleton style={{marginHorizontal:10,borderRadius:5,overflow:'hidden',width:150,height:50}} animation='wave'>
    </Skeleton>
    <Skeleton style={{marginHorizontal:10,borderRadius:5,overflow:'hidden',width:150,height:50}} animation='wave'>
    </Skeleton>
    <Skeleton style={{marginHorizontal:10,borderRadius:5,overflow:'hidden',width:150,height:50}} animation='wave'>
    </Skeleton>
    <Skeleton style={{marginHorizontal:10,borderRadius:5,overflow:'hidden',width:150,height:50}} animation='wave'>
    </Skeleton>
    <Skeleton style={{marginHorizontal:10,borderRadius:5,overflow:'hidden',width:150,height:50}} animation='wave'>
    </Skeleton>
    </>
  )
}

export default CategoryCardSkeleton

const styles = StyleSheet.create({})