// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios"

// const initialState = {
//     categoryList: [],
//     loading: false,
//     error :false,
// } 



// // export const getCategory = createAsyncThunk(
// //     "getCategory", //! action types

// //     async (thunkAPI, { rejectWithValue }) => {
// //         //! asyn callback function
// //         const url = 'https://course-api.com/react-store-products';
// //         try {
// //             const { data } = await axios(url);
// //             console.log(data);
// //             const newdata = filter((data) => data.category == e.target.value)
// //             return newdata;
// //         } catch (error) {
// //              return rejectWithValue("Something went wrong");
// //         }
// //     }
// // );


// const catagorySlice = createSlice({
//     name: "catagory",
//     initialState,
//     reducers: {
//         setCatagory: (state, { payload }) => {
//             state.categoryList = payload;
//         },
//         clearCatagory: (state, { payload }) => {
//             state.categoryList = [];
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getCategory.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(getCategory.fulfilled, (state, { payload }) => {
//                 state.categoryList = payload;
//                 state.loading = false;
//             })
//             .addCase(getCategory.rejected, (state, { payload }) => {
//                 state.loading = false;
//                 state.error = payload;
//             });
//     },
// });

// export const { setCatagory } = catagorySlice.actions;

// export default catagorySlice.reducer;