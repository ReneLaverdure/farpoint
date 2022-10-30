import { createSlice } from "@reduxjs/toolkit";

//double check non-serializable value
const initialState = {
    currentUser: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            console.log(action.payload)
            state.currentUser = action.payload
        }
    }
})

export const getUser = state => state.user.currentUser

export const {setCurrentUser} = userSlice.actions
export default userSlice.reducer