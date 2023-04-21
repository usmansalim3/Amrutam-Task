import { FlatList, StyleSheet, Text, View,Image, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import VirtualizedList from '../Components/VirtualizedList'
import { Surface } from 'react-native-paper'
import Colors from '../Constants/Colors'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { getBlogsThunk, getCategoriesThunk, getMoreBlogs } from '../Redux/slices/BlogSlice'
import CategoryCardSkeleton from '../Components/CategoryCardSkeleton'
import BlogCardSkeleton from '../Components/BlogCardSkeleton'
import VideoCard from '../Components/VideoCard'



const Blogs = () => {
  const navigation=useNavigation();
  const state=useSelector((state)=>state.blog)
  const dispatch=useDispatch();
  const [selectedCategory,setSelectedCategory]=useState("All Blogs");
  const [page,setPage]=useState(1);
  const [id,setId]=useState(1);
  const video=[
    {uri:"https://cdn4.fireworktv.com/medias/2022/7/14/1657791918-wjobaflc/watermarked/540/10000000_3169424163270133_4593080676021649237_n.mp4",title:"Amrutam Papa "},
    {uri:"https://cdn4.fireworktv.com/medias/2022/7/14/1657792120-acznwigx/watermarked/540/10000000_1220842515067374_9156743976455283835_n.mp4",title:"Hibiscus at Amrutam Vatika"},
    {uri:"https://cdn4.fireworktv.com/medias/2022/7/14/1657792357-tslbpnjq/watermarked/540/10000000_728499468114984_8139120134619675875_n.mp4",title:"Haldi at Amrutam Vatika"},
    {uri:"https://cdn4.fireworktv.com/medias/2022/7/14/1657792235-dvylorzx/watermarked/540/10000000_852910542278526_6890479819261823263_n.mp4",title:"White and Blue Shankhpushpi"}
  ]
  
  function PressHandler(category,id){
    setId(id);
    setSelectedCategory(category);
    //dispatch(getMoreBlogs({id,limit:3*page,posts:state.blogs}))
    dispatch(getBlogsThunk(id));
  }


  useEffect(()=>{
    dispatch(getCategoriesThunk());
    dispatch(getBlogsThunk(id))
    //dispatch(getMoreBlogs({id,limit:3*page,posts:[]}))
  },[])
  
  return (
    <VirtualizedList>
        <FlatList 
        contentContainerStyle={{padding:5}}
        data={video}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode='never'
        renderItem={({item})=>(
            <VideoCard item={item}/>
        )}
         />

        <FlatList 
        contentContainerStyle={{padding:5}}
        data={state.categories}
        style={{marginTop:10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode='never'
        ListEmptyComponent={()=><CategoryCardSkeleton/>}
        renderItem={({item})=>{
          if(state.loadingCategories){
            return(
              <CategoryCardSkeleton/>
            )
          }
          return(
            <TouchableWithoutFeedback onPress={()=>PressHandler(item.category,item.id)} >
            <Surface style={{marginHorizontal:10,borderRadius:5,overflow:'hidden',width:150,backgroundColor:selectedCategory==item.category?Colors.green800:Colors.lime,paddingHorizontal:0,paddingVertical:5,justifyContent:'center'}}>
                <Text style={{fontSize:16,textAlign:'center',color:selectedCategory==item.category?'white':'black'}}>{item.category}</Text>
            </Surface>
            </TouchableWithoutFeedback>
          )
        }}
         />


         <FlatList
         contentContainerStyle={{padding:5}}
         overScrollMode='never'
         data={state.blogs}
         
         ListEmptyComponent={()=><BlogCardSkeleton/>}
         renderItem={({item})=>{
          if(state.loadingBlogs){
            return(
              <BlogCardSkeleton/>
            )
          }
          return(
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('readBlog',{
              blogData:item
            })}>
            <Surface style={{backgroundColor:'#fff',marginVertical:5,borderRadius:10,overflow:'hidden',width:'95%',alignSelf:'center',flexDirection:'row',maxHeight:100}}>
            <Image source={{uri:item.img.src}} style={{height:100,width:120}}/>
            <View style={{padding:10,width:'70%',justifyContent:'space-between'}}>
                <Text numberOfLines={3} style={{fontSize:16}} >{item.title}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:10,marginTop:5}}>
                <Text style={{color:Colors.grey}}>{item.author}</Text>
                <Text style={{color:Colors.grey}}>{item.date}</Text>
            </View>
            </View>
            </Surface>
            </TouchableWithoutFeedback>
          )
         }}
         />
         <View style={{height:100}}/>
    </VirtualizedList>
  )
}

export default Blogs

const styles = StyleSheet.create({})