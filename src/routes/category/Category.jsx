import { useContext, Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories';

import ProductCard from '../../components/ProductCard/ProductCard'

export default function Category() {
    const  {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProduce] = useState(categoriesMap[category]);

    useEffect(() => {
        setProduce(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2>{category.toUpperCase()}</h2>
            <div className='products-container'>
                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
    </Fragment>
    )
}
