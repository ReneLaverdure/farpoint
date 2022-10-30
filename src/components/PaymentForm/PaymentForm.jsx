import {useState, useEffect} from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import Button from '../Button/Button';

import {useSelector} from 'react-redux'
import { getCartTotal } from '../../store/features/cart';
import { getUser } from '../../store/features/user';

import {
    PaymentFormContainer,
    FormContainer
} from './PaymentForm.styles.jsx'

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements()

  const amount = useSelector(getCartTotal)
  const currentUser = useSelector(getUser)
  const [isProcessingPayment, setisProcessingPayment] = useState(false)
  const [clientSecret, setClientSecret] = useState("")


  useEffect(() => {
    //create payment intent on page load
    // must have amount 
    if(amount > 0){
      fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({amount: amount * 100})
      })
        .then(res => res.json())
        .then((data) => {
          setClientSecret(data.paymentIntent.client_secret)
        })
    }
  }, [])

  const paymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe || !elements){
      return;
    }

    setisProcessingPayment(true)
 
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName ? currentUser.displayName : 'Guest'
        }
      }
    })

    setisProcessingPayment(false)

    if(paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if(paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment successful')
      }
    }
  }
 
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit card payment: </h2>
        <CardElement />
        <Button>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}
