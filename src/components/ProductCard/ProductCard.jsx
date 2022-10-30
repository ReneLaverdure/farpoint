import Button from '../Button/Button'

import { useDispatch } from 'react-redux';
import { addCartItem, updateCartTotal } from '../../store/features/cart';
import {Link, useParams, matchRoutes, useLocation} from 'react-router-dom'

import { 
  ProductCardContainer,
  ProductImage,
  ProductContent
 } from './ProductCard.style';

export default function ProductCard({product, url}) {
    const {name, imageUrl, price, category} = product;
    const dispatch = useDispatch()

    let params = useParams()
    // console.log(params)
    // console.log(name)
    let link = category + "/" + name;
    // console.log(link)

 
    
    const addProductToCart = () => {
      dispatch(addCartItem(product))
      dispatch(updateCartTotal())
    }

  return (
    <ProductCardContainer>
        <ProductImage imageUrl={imageUrl} />
          <ProductContent>
            <span>{name}</span>
            <span>${price}</span>
          </ProductContent>
        <Button onClick={addProductToCart}>Add to cart</Button>
        <Button onClick={addProductToCart}>
          <Link to={`${url}`}>
            View Item
          </Link>
        </Button>
    </ProductCardContainer>
  )
}
