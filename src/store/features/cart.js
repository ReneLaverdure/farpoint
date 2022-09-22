import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cartItemCount: 0,
    cartTotal: 0,
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const product = action.payload
            const cart = state.cartItems
            const existingCartItem = cart
                .find((cartItem) => cartItem.id === product.id);
            
            if(existingCartItem){
                  state.cartItems = cart.map((cartItem) => 
                    cartItem.id === product.id 
                    ? {...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem
                )
            } else {
                state.cartItems = [...cart, {...action.payload, quantity: 1} ]
            }

            
        },
        removeCartItem: (state, action) => {   
            const product = action.payload
            const cart = state.cartItems
            const existingCartItem = cart.find(
                (cartItem) => cartItem.id === product.id
            )

            if(existingCartItem.quantity === 1){
                state.cartItems = cart.filter((cartItem) => cartItem.id !== product.id) 
            } else {
                state.cartItems = state.cartItems.map((cartItem) => 
                    cartItem.id === product.id
                        ? {...cartItem, quantity: cartItem.quantity - 1}
                        : cartItem
                )
            }
        },
        updateCartTotal: (state, action) => {
             state.cartTotal = state.cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        },
        clearCartItem: (state, action) => {
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
        },
        toggleCart: (state, action) => {
            let cart = state.isCartOpen
            state.isCartOpen = !cart
        }
    }
})

export const getCartStatus = (state) => state.cart.isCartOpen
export const getCartItems = state => state.cart.cartItems
export const getCartTotal = state => state.cart.cartTotal

export const {addCartItem, removeCartItem , updateCartTotal, clearCartItem, toggleCart} = cartSlice.actions
export default cartSlice.reducer