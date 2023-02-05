import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems :[]
    },
    reducers: {
        addItem:(state,action)=>{
            state.cartItems.push(action.payload)
        } ,
        removeItem:(state,action)=>{
           let index = state.cartItems.findIndex((item)=>{
                return item.id===action.payload

            })
            state.cartItems.splice(index , 1)
        } ,
        clearCart:(state,action)=>{
            state.cartItems=[]
        }

    }
});


export const { addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer