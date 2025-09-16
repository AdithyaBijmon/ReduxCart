import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"Cart",
    initialState :[],
    reducers:{
        //add to cart - when add to cart button clicked from view and wishlist
        addToCart : (state,action)=>{
            // find product is in the state
            const existingProduct = state?.find(item=>item.id==action.payload.id)

            if(existingProduct){
              existingProduct.quantity++
              existingProduct.totalPrice = existingProduct.quantity*existingProduct.price

            //   get remaining products other than existing products

            const remainProducts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainProducts,existingProduct]
            }
            else{
                // add item to cart
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer