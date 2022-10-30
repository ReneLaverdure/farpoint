import {useContext, Fragment} from 'react'

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import {useSelector} from 'react-redux'
import {selectCategoriesMap} from '../../store/features/categorySelector'


export default function CategoriesPreview() {
  const categoriesMap = useSelector((state) => state.category.categoriesArray.categories)
  
  
  return (
    <Fragment>
        {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
          
            return (
                <CategoryPreview key={title}  title={title} products={products} />
            )
        })}
    </Fragment>
  )
}
