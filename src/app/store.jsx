import {configureStore} from "@reduxjs/toolkit"
import productReducer from "../features/productSlice";
import catagoryReducer from "../features/catagorySlice"

export const store =configureStore({
    reducer: {
        product : productReducer,
        catagory : catagoryReducer,
    }
})