import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser : false
}
console.log(initialState.currentUser)

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setCurrentUser: (state, { payload }) => {
            console.log(payload)
            state.currentUser = payload
        },   
    }
});


export const {setCurrentUser } = usersSlice.actions

export default usersSlice.reducer