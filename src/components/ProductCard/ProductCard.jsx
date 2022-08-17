import React from 'react'
import Button from '../button/Button'


export default function ProductCard() {
  return (
    <div className='productCard'>
        <div className='productCard-img'>
            <img src="" alt="" />
        </div>
        <div productCard-content>
            <span>name</span>
            <span>Price</span>
        </div>
        <Button>Add to cart</Button>
    </div>
  )
}
