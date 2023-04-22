import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import React from 'react'
import moment from 'moment/moment'
import Colors from '../Constants/Colors'
import ReactionSlider from "../Components/ReactionSlider"
import VirtualizedList from '../Components/VirtualizedList'
import InfoCard from '../Components/InfoCard'
import ProductsCategoryCard from '../Components/ProductsCategoryCard'
import OrderCard from '../Components/OrderCard'
import AppointmentCard from '../Components/AppointmentCard'
import BlogCard from '../Components/BlogCard'
import CategoryCard from '../Components/CategoryCard'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import DoctorCard from '../Components/DoctorCard'
import Counter from '../Components/Counter'
import { blogsData, categories, doctors, infoData, productsCategoriesData, productsData } from '../Data/Data'




const Home = () => {
  const navigation=useNavigation();
  const {appointmentNotifications}=useSelector(state=>state.bulletin)
  function pressHandler(){
    navigation.navigate('blogs')
  }
  console.log("rerender")
  return (
    // <View style={{flex:1,backgroundColor:"#fff",paddingHorizontal:7,marginBottom:5}}>
      <VirtualizedList>
      <View style={{marginLeft:5,marginTop:5}}>
        <Text style={{fontFamily:'DinNext',fontSize:16,color:Colors.green500}}> {moment().format('dddd[,]Do MMMM ')}</Text>
        <Text style={{fontSize:22,fontWeight:'bold',bottom:10,color:Colors.green800}}> Namaste, <Text style={{fontFamily:'DinNext',fontSize:22,color:Colors.green800}}>Angela</Text></Text>
      </View>
      <View style={{paddingHorizontal:7,marginVertical:10}}>
        <ReactionSlider/>
      </View>
        <FlatList
        style={{paddingHorizontal:7}}
        overScrollMode='never'
        data={infoData}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><InfoCard item={item}/>}
        />


        <Text style={{fontSize:22,color:Colors.green500,marginLeft:3,marginVertical:10}}> Shop for Health & Beauty</Text>
        <FlatList 
        data={productsCategoriesData}
        horizontal
        overScrollMode='never'
        style={{backgroundColor:'#fff'}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><ProductsCategoryCard item={item}/>}
        />


        <Text style={{fontSize:22,color:Colors.green500,marginLeft:3,marginVertical:10}}> Recent Orders</Text>
        <FlatList
        data={productsData}
        horizontal
        overScrollMode='never'
        style={{backgroundColor:'#fff'}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><OrderCard item={item}/>}
        />

        <Text style={{fontSize:22,color:Colors.green500,marginVertical:10,marginLeft:3,marginVertical:10}}> Upcoming Appointments</Text>
        <View>
            <FlatList
            style={{borderWidth:1.5,borderColor:Colors.green500,marginHorizontal:5,borderRadius:10,padding:5}}
            data={appointmentNotifications}
            ListEmptyComponent={()=><AppointmentCard empty={true}/>}
            renderItem={({item})=><AppointmentCard item={item}/>}
            />
        </View>

        <View style={{flexDirection:'row',marginTop:10,marginLeft:3,justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontSize:22,color:Colors.green500}}> Amrutam Blogs</Text>
            <TouchableWithoutFeedback onPress={pressHandler}>
            <View style={{flexDirection:'row',alignItems:'center',marginRight:5}}>
                <Text style={{fontSize:16,color:Colors.green500,marginRight:5}}>Read more</Text>
                <AntDesign name="rightcircleo" size={14} color={Colors.green800} style={{marginRight:5,top:1}} />
            </View>
            </TouchableWithoutFeedback>
        </View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{marginVertical:10}}
        overScrollMode='never'
        data={blogsData}
        renderItem={({item})=><BlogCard item={item}/>}
        />


        <Text style={{fontSize:22,color:Colors.green500,marginVertical:10,marginLeft:3}}> What are you looking for ?</Text>
        <FlatList
        horizontal
        overScrollMode='never'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding:5}}
        data={categories} 
        style={{marginLeft:-5}}
        renderItem={({item,index})=><CategoryCard item={item} index={index}/>}
        />


        <Text style={{fontSize:22,color:Colors.green500,marginVertical:10,marginLeft:3}}> Top Rated Doctors </Text>
        <FlatList
        horizontal
        overScrollMode='never'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding:5}}
        data={doctors} 
        style={{marginLeft:-5}}
        renderItem={({item,index})=><DoctorCard item={item} />}
        />

        <View style={{width:'100%',height:50}}>
        </View>
      </VirtualizedList>
    // </View>
  )
}

export default Home

const styles = StyleSheet.create({})