import {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart'
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button'

import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, getCartItems } from '../../store/features/cart';

import './CartSide.scss'

export default function CartSide() {
    // const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);

    const cartItems = useSelector(getCartItems)
    const dispatch = useDispatch()
    const toggleIsCartOpen = () => dispatch(toggleCart());

    const navigate = useNavigate();


    const goToCheckoutHandler = () => {
        toggleIsCartOpen();
        navigate('/checkout');
    }

  return (
    <div id="mySidenav" className="sidenav">
        <Button  onClick={toggleIsCartOpen}>&times;</Button>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
            ) : (
                <span>Your cart is empty</span>
            )}
        </div>
        <Button onClick={goToCheckoutHandler}>Go to CheckOut</Button>
    </div>
  )
}
