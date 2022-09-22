import { createSlice } from "@reduxjs/toolkit";

//double check non-serializable value
const initialState = {
    categories: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState: {categoriesArray: initialState},
    reducers: {
        setCategoriesArray: (state, action) => {
            state.categoriesArray.categories = action.payload.reduce((acc, category) => {
                      const {title,items} = category;
                      acc[title.toLowerCase()] = items;
                      return acc;
                    }, {})
        }
    }
})

export const {setCategoriesArray} = categorySlice.actions
export default categorySlice.reducer