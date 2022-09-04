import {useContext} from 'react'
import Button from '../Button/Button'
import { CartContext } from '../../contexts/cart';

import './ProductCard.scss'
import { 
  ProductCardContainer,
  ProductImage
 } from './ProductCard.style';

export default function ProductCard({product}) {
    const {name, imageUrl, price} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

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
