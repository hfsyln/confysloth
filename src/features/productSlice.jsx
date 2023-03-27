import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    productList: [],
    loading: false,
    error :false,
} 

export const getProduct = createAsyncThunk(
    "getProduct", //! action types

    async (thunkAPI, { rejectWithValue }) => {
        //! asyn callback function
        const url = 'https://course-api.com/react-store-products';
        try {
            const { data } = await axios(url);
            console.log(data);
            return data;
        } catch (error) {
             return rejectWithValue("Something went wrong");
        }
    }
);


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, { payload }) => {
            state.productList = payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProduct.fulfilled, (state, { payload }) => {
                state.productList = payload;
                state.loading = false;
            })
            .addCase(getProduct.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;