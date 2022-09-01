import {Routes, Route} from 'react-router-dom';
import CategoryPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../category/Category';

import './Shop.scss'

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  )
}
 