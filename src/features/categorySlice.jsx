import { createSlice, } from "@reduxjs/toolkit";



const initialState = {
    categoryList: [],
    choosen: "",

};



const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setChoosen: (state, { payload }) => {
            state.choosen = payload;

        },
        setCategoryList: (state, { payload }) => {
            state.categoryList = payload;
            

        },
    },
  
});

export const { setChoosen ,setCategoryList} = categorySlice.actions;

export default categorySlice.reducer;