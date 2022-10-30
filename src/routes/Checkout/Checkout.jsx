import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import { useSelector } from 'react-redux';
import { getCartItems, getCartTotal } from '../../store/features/cart';

import {Elements} from '@stripe/react-stripe-js'
import { stripePromise } from '../../utils/stripe/stripe';

import PaymentForm from '../../components/PaymentForm/PaymentForm';
import './Checkout.scss'

export default function Checkout() {
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
  
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
        
    </div>
  )
}
