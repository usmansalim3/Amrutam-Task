import { StyleSheet,  } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed';


const BlogCardSkeleton = () => {
  return (
    <>
    <Skeleton style={{marginVertical:5,borderRadius:5,overflow:'hidden',width:'95%',height:100,alignSelf:'center'}} animation='wave'>
    </Skeleton>
    <Skeleton style={{marginVertical:5,borderRadius:5,overflow:'hidden',width:'95%',height:100,alignSelf:'center'}} animation='wave'>
    </Skeleton>
    <Skeleton style={{marginVertical:5,borderRadius:5,overflow:'hidden',width:'95%',height:100,alignSelf:'center'}} animation='wave'>
    </Skeleton>    
    </>
  )
}

export default BlogCardSkeleton

const styles = StyleSheet.create({})