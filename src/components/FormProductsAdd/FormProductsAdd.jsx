import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postProductToBack } from '../../helpers/API';
import { addProductThunk } from '../../redux/productsOperations';
import { addProduct } from "../../redux/productsSlice"

export default function FormProductsAdd({ setProducts }) {



 const [name, setName] = useState("");

 const [description, setDescription] = useState("");

 const [price, setPrice] = useState(0);

 const dispatch = useDispatch();
 


    const getDataFromInput = (e) => {

        const obj={
            name: setName,
            description: setDescription,
            price: setPrice,
        }

        obj[e.target.name](e.target.value);

    }

    
    

    const submitFoo = (e) => {
        e.preventDefault();
        
        dispatch(addProductThunk({name, description, price }))
        // postProductToBack({name, description, price}).then(data => {
            
        //     setProducts((prevProds)=> [...prevProds, data] );
        // })
        // .catch((error) =>{ throw new Error("Oooops... ") })
        e.target.reset();
        }

  return (
    <form onSubmit={submitFoo}>
        <input onChange={getDataFromInput} placeholder="name of your product" type="text" name="name"/>
        <input onChange={getDataFromInput} placeholder="product description" type="text" name="description"/>
        <input onChange={getDataFromInput} placeholder="product price" type="number" name="price"/>
        <button type="submit">Add Product</button>
    </form>
  )
}
