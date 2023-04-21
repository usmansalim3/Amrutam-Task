import { createSlice } from "@reduxjs/toolkit"

const initialState={
    notifications:[
        {icon:"account-circle-outline",message:"Namaste! \nWelcome to the Amrutam family We hope you have a holistic experience here !",date:"22nd Dec 2022",alert:false,id:1},
        {icon:"close-circle-outline",message:"The transaction for your recent order has failed 🚫.Please try again",date:"22nd Dec 2022",alert:true,id:2},
        {icon:"clock-outline",message:"Your favourite Amrutam Elixirs are waiting for you ⏳",date:"22nd Dec 2022",alert:false,id:3},
        {icon:"newspaper-variant-outline",message:"Time to read all the new blogs posted recently 📰",date:"22nd Dec 2022",alert:false,id:4},
        {icon:"message-text-outline",message:"New message from Dr.Gajendra",date:"22nd Dec 2022",alert:false,id:5},
        {icon:"play-circle-outline",message:"Your Video Call Appointment is about to begin 🔔",date:"22nd Dec 2022",alert:false,id:6},{icon:"account-circle-outline",message:"Namaste! \nWelcome to the Amrutam family We hope you have a holistic experience here !",date:"22nd Dec 2022",alert:false,id:7},
        {icon:"close-circle-outline",message:"The transaction for your recent order has failed 🚫.Please try again",date:"22nd Dec 2022",alert:true,id:8},
        {icon:"clock-outline",message:"Your favourite Amrutam Elixirs are waiting for you ⏳",date:"22nd Dec 2022",alert:false,id:9},
        {icon:"newspaper-variant-outline",message:"Time to read all the new blogs posted recently 📰",date:"22nd Dec 2022",alert:false,id:10},
        {icon:"message-text-outline",message:"New message from Dr.Gajendra",date:"22nd Dec 2022",alert:false,id:11},
        {icon:"play-circle-outline",message:"Your Video Call Appointment is about to begin 🔔",date:"22nd Dec 2022",alert:false,id:12}
      ],
      appointmentNotifications:[
        {icon:"play-circle-sharp",mode:"Video call",date:"22nd March 2023",doctor:"Dr.Gajendra",time:"2:30 PM",id:1},
        {icon:"ios-call-outline",mode:"On call",date:"22nd March 2023",doctor:"Dr.Manoj",time:"6:30 PM",id:2},
        {icon:"chatbox-ellipses-outline",mode:"on Text",date:"22nd March 2023",doctor:"Dr.Shelly",time:"7:00 PM",id:3}
      ]
}
const BulletinSlice=createSlice({
    name:'bulletinSlice',
    initialState,
    reducers:{
        clearNotification:(state,{payload})=>{
            // state=state.filter((notification=>notification.id!=payload));
            state.notifications=state.notifications.filter((notification=>notification.id!=payload))
        },
        clearAppointmentNotification:(state,{payload})=>{
            state.appointmentNotifications=state.appointmentNotifications.filter((notification=>notification.id!=payload))
        },
    }
})
export default BulletinSlice.reducer
export const {clearNotification,clearAppointmentNotification}=BulletinSlice.actions