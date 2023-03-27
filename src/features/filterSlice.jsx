import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredList: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
   

    setFilteredList: (state, { payload }) => {
      console.log(payload);
      state.filteredList = payload;
    },
  },
});

export const { setFilters, setFilteredList } = filterSlice.actions;

export default filterSlice.reducer;