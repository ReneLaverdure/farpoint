import {useContext} from 'react'
import Button from '../Button/Button'
import { CartContext } from '../../contexts/cart';

import { useDispatch } from 'react-redux';
import { addCartItem, updateCartTotal } from '../../store/features/cart';
import './ProductCard.scss'
import { 
  ProductCardContainer,
  ProductImage
 } from './ProductCard.style';

export default function ProductCard({product}) {
    const {name, imageUrl, price} = product;
    const { addItemToCart } = useContext(CartContext);
    const dispatch = useDispatch()
    
    const addProductToCart = () => {
      dispatch(addCartItem(product))
      dispatch(updateCartTotal())
    }

  return (
    <ProductCardContainer>
        <ProductImage imageUrl={imageUrl} />
        <div className="productCard-content" >
            <span>{name}</span>
            <span>${price}</span>
        </div>
        <Button onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  )
}
