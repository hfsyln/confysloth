import { createSlice, } from "@reduxjs/toolkit";



const initialState = {
   // categoryList: [],
    category: " "
   

};



const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory: (state, { payload }) => {
            state.category = payload;

        },
        // setCategoryList: (state, { payload }) => {
        //     state.categoryList = payload;
            

        // },
    },
  
});

export const { setCategory ,setCategoryList} = categorySlice.actions;

export default categorySlice.reducer;