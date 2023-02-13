import {configureStore} from "@reduxjs/toolkit"
import productReducer from "../features/productSlice";
import categoryReducer from "../features/categorySlice"
import cartReducer from "../features/cartSlice"
import favoriteReducer from "../features/favoriteSlice"
import usersReducer from "../features/usersSlice"

export const store =configureStore({
    reducer: {
        product : productReducer,
        category : categoryReducer,
        cart : cartReducer,
        favorite :  favoriteReducer,
        users : usersReducer,
    }
})