import { createSlice } from "@reduxjs/toolkit";

//double check non-serializable value
const initialState = {
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {currentUser: initialState},
    reducers: {
        setCurrentUser: (state, action) => {
            console.log(action.payload)
            state.currentUser = action.payload
        }
    }
})

export const {setCurrentUser} = userSlice.actions
export default userSlice.reducer