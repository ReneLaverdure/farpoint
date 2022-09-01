import {useContext} from 'react'
import { CartContext } from '../../contexts/cart'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Checkout.scss'

export default function Checkout() {
    const {cartItems, cartTotal} = useContext(CartContext);


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
