import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


export const getCategoriesThunk=createAsyncThunk('/getCategories',async()=>{
    const res=await axios.get("http://192.168.0.192:4000/shopify/getCategories");
    return res.data
})
export const getBlogsThunk=createAsyncThunk('/getBlogs',async(id)=>{
    const res=await axios.post("http://192.168.0.192:4000/shopify/getCategoryBlogs",{
        id
    });
    return res.data.response;
})
export const getMoreBlogs=createAsyncThunk('getMoreBlogs',async({id,limit,posts})=>{
    const res=await axios.post("http://192.168.0.192:4000/shopify/getCategoryBlogs",{
        id,
        limit
    });
    return [...posts,...res.data.response];
})
const initialState={
    loadingCategories:true,
    categories:[{}],
    loadingBlogs:true,
    blogs:[]
}
const BlogSlice=createSlice({
    name:"BlogSlice",
    initialState,
    extraReducers:{
        [getCategoriesThunk.pending]:(state)=>{
            state.loadingCategories=true
        },
        [getCategoriesThunk.fulfilled]:(state,{payload})=>{
            console.log(payload)
            state.loadingCategories=false;
            state.categories=[{category:"All Blogs",id:1},...payload]
        },
        [getBlogsThunk.pending]:(state)=>{
            state.blogs=[{}]
            state.loadingBlogs=true;
        },
        [getBlogsThunk.fulfilled]:(state,{payload})=>{
            state.loadingBlogs=false;
            state.blogs=payload;
        },
        [getMoreBlogs.fulfilled]:(state,{payload})=>{
            state.blogs=payload
        }
    }
})
export default BlogSlice.reducer
