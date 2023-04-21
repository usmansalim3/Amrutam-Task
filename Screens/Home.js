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


const Home = () => {
  const navigation=useNavigation();
  const {appointmentNotifications}=useSelector(state=>state.bulletin)
  const infoData=[
    {icon:"moon",message:"You slept for",boldMessage:" 8 hours",iconRight:"reload1"},
    {icon:"shoe-prints",message:"You took",boldMessage:" 1200 steps",iconRight:"reload1"},
    {icon:"clock",message:"Screen time is",boldMessage:" 4 hours",iconRight:"reload1"},
    {icon:"heartbeat",message:"Connect your",boldMessage:" health app",iconRight:"plus",helperMessage:"Health data is not available"}
  ]
  const productsCategoriesData=[
    {path:require("../assets/pills-svgrepo-com.png"),title:"Pills"},
    {path:require("../assets/beauty-salon-svgrepo-com.png"),title:"Hair"},
    {path:require("../assets/female-svgrepo-com.png"),title:"Women"},
    {path:require("../assets/sexual-reproductive-health-svgrepo-com.png"),title:"Sexual"},
    {path:require("../assets/digestive-system-svgrepo-com.png"),title:"Digestion"}
  ]
  const productsData=[
    {path:require("../assets/Product1.jpeg"),title:"Amrutam Chawanprash",price:"1,200",priceBefore:"1,500"},
    {path:require("../assets/Product2.png"),title:"Amrutam Gulkand",price:"1,200",priceBefore:"1,800"},
    {path:require("../assets/Product3.png"),title:"Amrutam Triphala Churna",price:"999"},
    {path:require("../assets/Product4.png"),title:"Amrutam Zeo Malt",price:"499"},
    {path:require("../assets/Product5.png"),title:"Amrutam Nari Sondarya Oil",price:"499"}
  ]
  const blogsData=[
    {img:require("../assets/blog4.png"),blog:"1 in 10 women suffer from PCOS"},
    {img:require("../assets/blog3.png"),blog:"1 in 5 men are prone to baldness by age 20"},
    {img:require("../assets/blog2.png"),blog:"Acne is the most common skin concern worldwide"},
    {img:require("../assets/blog1.png"),blog:"1 in 4 adults experience a mental health concern at least once their life"}
  ]
  const categories=[
    {img:require("../assets/quiz.png"),title:"Take a quiz"},
    {img:require("../assets/phone.png"),title:"E-books"},
    {img:require("../assets/tv.png"),title:"Amrutam TV"},
    {img:require("../assets/icons8-product-100.png"),title:"Products"}
  ]

  const doctors=[
    {img:"https://cdn.shopify.com/s/files/1/0645/9650/8925/files/312829393_511312870629646_4958697370998722289_n_600x600.jpg?v=1677565430",name:"Dr. Tanuja Gohane"},
    {img:"https://cdn.shopify.com/s/files/1/0645/9650/8925/files/IMG_20221019_143409_600x600.jpg?v=1675852390",name:"Dr Ravi Dhaliya"},
    {img:"https://cdn.shopify.com/s/files/1/0645/9650/8925/files/312829393_511312870629646_4958697370998722289_n_250x250.jpg?v=1677565430",name:"Dr. Tanuja Gohane"},
    {img:"https://cdn.shopify.com/s/files/1/0645/9650/8925/files/312829393_511312870629646_4958697370998722289_n_250x250.jpg?v=1677565430",name:"Dr. Tanuja Gohane"}
  ]
  function pressHandler(){
    navigation.navigate('blogs')
  }
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