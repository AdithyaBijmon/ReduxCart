import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
    const response = await axios.get("https://dummyjson.com/products")
    console.log(response.data.products)
    return response.data.products
},)

const productSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        loading: true,
        error: ""

    },
    reducers: {

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending,(state,action)=>{
            state.loading = true
            state.allProducts = []
            state.error = ""
        })
    }
})