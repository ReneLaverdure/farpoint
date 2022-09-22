import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart';
import {useSelector, useDispatch} from 'react-redux'
import { toggleCart } from '../../store/features/cart';
import './CartIcon.scss'

export default function CartIcon() {
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);
  const dispatch = useDispatch()
  const toggleIsCartOpen = () => dispatch(toggleCart())
 

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}
