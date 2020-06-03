import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

export default function Details(props) {
    const [item, setItem] = useState({});

    useEffect(() => { 
        let source = axios.CancelToken.source();
        const loadData = async () => {
            try {
                const response = await axios.get(`https://practiceapi.devmountain.com/products/${props.match.params.id}`, {
                    cancelToken: source.token
                });
                setItem(response.data);
            } catch(error){}
        };
        loadData();

        return () => {
            source.cancel();
        }
    })

    return (
        <div className='product-details'>
            <img src={item.image} alt={item.title} style={{"width": "25em"}}/>
            <h1>Price: ${item.price}</h1>
        </div>
    )
}
