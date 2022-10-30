import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import userReducer from './features/user'
import categoryReducer from './features/category'
import cartReducer from './features/cart'
import utilSlice from './features/utilSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
        cart: cartReducer,
        util: utilSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;