import {CartItemContainer, 
        CartItemDetail, 
        CartControlContainer,
        CartControl, 
        CartControlButton,
        CartControlLabel, 
        RemoveLabel
          } from './CartIem.style'


        
interface ItemInterface {
  imageUrl: string;
  price: number;
  name: string;
  quantity: string;
}

interface CartItemInterface {
  [name: string] : ItemInterface
}

export default function CartItem({cartItem}: CartItemInterface) {
    const {imageUrl, price, name, quantity} = cartItem
  console.log(cartItem)
  return ( 
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetail>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
        <CartControlContainer>
          <RemoveLabel>
            Remove
          </RemoveLabel>
          
          <CartControl>
            <CartControlButton>-</CartControlButton>
              <CartControlLabel>12</CartControlLabel>
            <CartControlButton>+</CartControlButton>
          </CartControl>


        </CartControlContainer>
      </CartItemDetail>
    </CartItemContainer>
  )
}
