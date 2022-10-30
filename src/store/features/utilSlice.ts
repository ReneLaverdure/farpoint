import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

//double check non-serializable value
interface UtilState {
    auth: boolean
}

const initialState: UtilState = {
    auth: false
}

export const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        toggleAuth: (state, action) => {
            state.auth = !state.auth
        }
    }
})

export const getAuthState = (state: RootState) => state.util.auth

export const {toggleAuth} = utilSlice.actions
export default utilSlice.reducer