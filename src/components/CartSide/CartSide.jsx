import {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart'
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button'
import './CartSide.scss'

export default function CartSide() {
    const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
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
