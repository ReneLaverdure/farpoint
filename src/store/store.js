import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from './features/user'
import categoryReducer from './features/category'
import cartReducer from './features/cart'

export const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
        cart: cartReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})