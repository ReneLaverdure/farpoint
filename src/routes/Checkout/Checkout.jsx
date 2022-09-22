import {useContext} from 'react'
import { CartContext } from '../../contexts/cart'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import { useSelector } from 'react-redux';
import { getCartItems, getCartTotal } from '../../store/features/cart';

import './Checkout.scss'

export default function Checkout() {
    // const {cartItems, cartTotal} = useContext(CartContext);
    const cartItems = useSelector(getCartItems)
    const cartTotal = useSelector(getCartTotal)

  return (
    <div className='CheckoutContainer'>
        <h2>Checkout</h2>
        {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div>
            TOTAL: ${cartTotal}
        </div>
    </div>
  )
}
