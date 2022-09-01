import {useContext} from 'react'
import Button from '../Button/Button'
import { CartContext } from '../../contexts/cart';

import './ProductCard.scss'

export default function ProductCard({product}) {
    const {name, imageUrl, price} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

  return (
    <div className='productCard'>
        <div className='productCard-img' style={{backgroundImage: `url(${imageUrl})`}}>
           
        </div>
        <div className="productCard-content" >
            <span>{name}</span>
            <span>${price}</span>
        </div>
        <Button onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}
