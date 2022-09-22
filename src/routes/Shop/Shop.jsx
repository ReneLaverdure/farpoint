import {Routes, Route} from 'react-router-dom';
import CategoryPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../category/Category';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { setCategoriesArray } from '../../store/features/category';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import './Shop.scss'

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        console.log(categoriesArray)
        dispatch(setCategoriesArray(categoriesArray))
    };

    getCategoryMap();
}, [])

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  )
}
 