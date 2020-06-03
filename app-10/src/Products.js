import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => { 
        let source = axios.CancelToken.source();
        const loadData = async () => {
            try {
                const response = await axios.get("https://practiceapi.devmountain.com/products", {
                    cancelToken: source.token
                });
                setProducts(response.data);
            } catch(error){}
        };
        loadData();

        return () => {
            source.cancel();
        }
    })
    return (
        <div className='product-list'>
            {products.map((product, i) => {
                return(
                    <Link to={`/details/${product.id}`} key={i} className='product'>
                        <img src={product.image} alt={product.title} style={{"width": "15em"}}/>
                    </Link>
                )
            })}
        </div>
    )
}
