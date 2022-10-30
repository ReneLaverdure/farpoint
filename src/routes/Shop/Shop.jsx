import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';

import CategoryPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../category/Category';
import Product from '../Product/Product';

import { setCategoriesArray } from '../../store/features/category';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import './Shop.scss'

export default function Shop() {
  const dispatch = useDispatch();
  console.log("hello from  the shop router")
  useEffect(() => {
    const getCategoryMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        console.log(categoriesArray)
        dispatch(setCategoriesArray(categoriesArray))
    };
    console.log('hello from the shiop useEffect')
    getCategoryMap();
}, [])

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path="/:category/*" element={<Category/>} />
   
    </Routes>
  )
}
 