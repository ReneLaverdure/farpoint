import {useContext, Fragment} from 'react'
import { CategoriesContext } from '../../contexts/categories'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'

export default function CategoriesPreview() {
    const {categoriesMap} = useContext(CategoriesContext)
  return (
    <Fragment>
        {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
                <CategoryPreview key={title} title={title} products={products}/>
            )
        })}
    </Fragment>
  )
}
