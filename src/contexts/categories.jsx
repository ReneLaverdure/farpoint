import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments, addCollectionAndDocuments } from "../utils/firebase";

import shoes from '../store-data'

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
    //replace shoes with empty array 
    const [categoriesMap, setcategoriesMap] = useState([]);

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', shoes)
    // }, [])

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            setcategoriesMap(categoryMap)
        };

        getCategoryMap();
    }, [])

    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}