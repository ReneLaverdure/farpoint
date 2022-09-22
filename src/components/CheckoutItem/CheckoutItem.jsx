import {useContext} from 'react'
import { CartContext } from '../../contexts/cart'

import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem, clearCartItem, updateCartTotal } from '../../store/features/cart';
import './CheckoutItem.scss';

export default function CheckoutItem({cartItem}) {
    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);


    const dispatch = useDispatch()

    const clearItemHandler = () => {
        dispatch(clearCartItem(cartItem))
        dispatch(updateCartTotal())
    }
    const addItemHandler = () => {
        dispatch(addCartItem(cartItem))
        dispatch(updateCartTotal())
    };
    const removeItemHandler = () => {
        dispatch(removeCartItem(cartItem))
        dispatch(updateCartTotal())
    };

  return (
    <div className='checkoutItem'>
        <h4 className='checkoutItem-name'>{name}</h4>
        <p className='checkoutItem-price'>{price}</p>
        <div className='checkoutItem-quantity'>
            <div className='checkoutItem-quantity__control' onClick={removeItemHandler}>
                &#10094;
            </div>
            <div className='checkoutItem-quantity__number'>{quantity}</div>
            <div className='checkoutItem-quantity__control' onClick={addItemHandler}>
                &#10095;
            </div>
        </div>

        <div className='checkoutItem-remove' onClick={clearItemHandler} >
            &#10005;
        </div>
    </div>
  )
}
