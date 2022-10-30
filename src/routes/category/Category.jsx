import { Fragment, useEffect, useState } from 'react'
import { useParams, Routes, Route } from 'react-router-dom';
import {useSelector} from 'react-redux'
import Product from '../Product/Product';
import ProductCard from '../../components/ProductCard/ProductCard'

export function CategoryPage () {
    const {category} = useParams()
    console.log(category)
    const categoriesMap = useSelector((state) => state.category.categoriesArray.categories)
    const [products, setProduce] = useState(categoriesMap[category]);

    useEffect(() => {
        setProduce(categoriesMap[category]);
    }, [category, categoriesMap])


    return (
        <Fragment>
            <h2>{category.toUpperCase()}</h2>
            
            <div className='products-container'>
                {products && products.map((product) => {
                    
                    let url = product.id
                    console.log(url)
                    return (
                        <ProductCard key={product.id} product={product} url={url}/>
                    )     
                })}
            </div>
        </Fragment>
    )
}

export default function Category() {

    return (
        <Routes>
            <Route index element={<CategoryPage />} />
            <Route path=":product" element={<Product/>}/>
        </Routes>
    )
}