import {useContext} from 'react'
import { CartContext } from '../../contexts/cart'

import './CheckoutItem.scss';

export default function CheckoutItem({cartItem}) {
    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

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
