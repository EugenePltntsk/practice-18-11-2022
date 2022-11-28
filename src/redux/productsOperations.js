import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { deleteProductFromBack, getListOfProducts, postProductToBack } from "../helpers/API"

export const getProductsThunk = createAsyncThunk(
    'products/getProducts',
  
    async (_, thunkAPI ) => {
      try {
        const response = await getListOfProducts();
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      
      
    }
  )

  export const addProductThunk = createAsyncThunk(
    'products/addProduct',
  
    async (product, thunkAPI ) => {
      try {
        const response = await postProductToBack(product);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      
      
    }
  )


  export const deleteProductThunk = createAsyncThunk(
    'products/deleteProduct',
  
    async (id, thunkAPI ) => {
      try {
        const response = await deleteProductFromBack(id);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      
      
    }
  )