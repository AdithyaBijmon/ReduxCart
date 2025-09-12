import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // add wishlist - used when add to wishlist button is clicked in the view component
        addToWishlist : (state,action)=>{
            state.push(action.payload)
        },
        // remove item from wishlist - used to remove a wishlist item from wishlist component when remove button is clicked
        removeWishlistItem:(state,action)=>{
          return  state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer