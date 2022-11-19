import React, { useEffect, useState } from 'react'
import { getListOfProducts } from '../../helpers/API';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
    getListOfProducts().then(data => {
        setProducts(data);
        
    })
    }, [])

   


  return (
    <ul>
        { products.map(product => (
            <li key={product.id + product.name}>{product.name}
            <p>{product.description}</p>
            <p>{product.price}</p>
            </li>
            
            
        ))}

    </ul>
  )
}
