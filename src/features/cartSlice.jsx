import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem:  JSON.parse(localStorage.getItem('cart')) || [],
    filterCartItem:  JSON.parse(localStorage.getItem('filtercart')) || [],
    cartOpen: false,
    cartCount: (JSON.parse(localStorage.getItem('cart')))?.length || ""
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItem: (state, { payload }) => {
            console.log(payload)
            state.cartItem = [...state.cartItem, payload]
            localStorage.setItem('cart', JSON.stringify(state.cartItem))
            console.log(state.cartItem);
        },

        setFilterCartItem: (state, { payload }) => {
            console.log(payload)
            // state.filterCartItem = [...state.filterCartItem, state.filterCartItem.filter(item => item.id !== payload.id)] 
            state.filterCartItem = [...state.filterCartItem, payload]
            localStorage.setItem('filtercart', JSON.stringify(state.filterCartItem))
            console.log(state.filterCartItem);
        },

        setCartCount: (state) => {
            state.cartCount = state.cartItem.length
            localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
            console.log(state.cartCount);
        },

        setcartOpen: (state) => {
            state.cartOpen = !state.cartOpen;
        },

        removeItemFromCart: (state, { payload }) => {
            state.cartItem = state.cartItem.filter(item => item.id !== payload.id)
            state.filterCartItem = state.filterCartItem.filter(item => item.id !== payload.id)
            localStorage.setItem('cart', JSON.stringify(state.cartItem))
            localStorage.setItem('filtercart', JSON.stringify(state.filterCartItem))
            state.cartCount = state.cartItem.length
            localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
        },

        clearAll: (state) => {
            state.cartItem = []
            localStorage.setItem('cart', JSON.stringify(state.cartItem))
            state.filterCartItem = []
            localStorage.setItem('filtercart', JSON.stringify(state.filterCartItem))
            state.cartCount = state.cartItem.length
            localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
        },

        setcartDecrease: (state, { payload }) => {
            console.log(payload)
            state.cartItem = payload
            localStorage.setItem('cart', JSON.stringify(state.cartItem))
            console.log(state.cartItem);
        },
    }
});

export const {setFilterCartItem, setCartItem, setCartCount, setcartOpen, removeItemFromCart, clearAll, setcartDecrease } = cartSlice.actions

export default cartSlice.reducer