import { createSlice } from '@reduxjs/toolkit'
import { addProductThunk, deleteProductThunk, getProductsThunk } from './productsOperations';


const initialState = {
products: [],
isLoading: false,
errorMessage: ""
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {},
    addProduct(state, action) {
    state.products = [...state.products, action.payload];
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(product => action.payload !== product.id)
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
        
      })

      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.errorMessage = "";    
      })

      .addCase(getProductsThunk.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
        
      })





      .addCase(addProductThunk.pending, (state) => {
        state.isLoading = true;
        
      })

      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload]
        state.isLoading = false;
        state.errorMessage = "";    
      })

      .addCase(addProductThunk.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
        
      })




      .addCase(deleteProductThunk.pending, (state) => {
        state.isLoading = true;
        
      })

      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload)
        state.isLoading = false;
        state.errorMessage = "";    
      })

      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isLoading = false;
        
      })



      
      
}});


const { actions, reducer } = productsSlice;

export const { fetchProduct, addProduct, deleteProduct } = actions;

export default reducer;
