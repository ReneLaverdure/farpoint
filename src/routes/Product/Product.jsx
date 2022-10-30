import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { getProductArray } from '../../store/features/category'

export default function Product() {
  let {category, product} = useParams()
  console.log(category, product)
  let itemsArray = useSelector(getProductArray)
  console.log(itemsArray)
  product = +product
  let item = itemsArray[category].filter((item) => item.id === product)
  console.log(item)
  const {name, price, imageUrl} = item[0]
  const size = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12]

  return (
    <div>
      <h2>{name}</h2>
      <h4>${price}.00</h4>
      {
        size.map((tab) => {
          return (
            <span key={tab}>{tab}</span>
          )
        })
      }
      <img src={imageUrl} alt="" />
    </div>
  )
}
