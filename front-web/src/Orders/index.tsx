import { useState, useEffect } from 'react';
import React from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { Product } from './types';
import { fetchProducts } from './api';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() =>{
        fetchProducts()
            .then(reponse => setProducts(reponse.data))
            .catch(error => console.log(error));
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
        </div>
    )
}

export default Orders; 