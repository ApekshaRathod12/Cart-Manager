import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addItem(state,action){
            state.push(action.payload)
        }
    }
})

// Create a selector to get cart items from state
export const getItemsSelector = createSelector(
    state => state.cart,
    cartItems => cartItems
)

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;