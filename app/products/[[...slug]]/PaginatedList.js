'use client'

import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard'
import Loader from '../../components/Loader';

export default function PaginatedList({initialPage, Totalpage, category}) {

    const [products, setProducts] = useState(initialPage)

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);



        async function sleep( ) {
            return new Promise(resolve=>setTimeout(resolve,3000))
    }

    const handeClick = async ()=> { 

        setError('');
        setLoading(true);
        await sleep();

        try {

            let res = await fetch(`https://dummyjson.com/products${category ? '/category/' + category : ''}?limit=8&skip=${products.length}`)
            let data = await res.json()
            setProducts([...products, ...data.products]);

        } catch (error) {
                setError('Error when Load more')
        } finally {
                setLoading(false);
        }

    }

    return (

        <>
        {
                products.map((prod) => (
                    <ProductCard key={prod.id} product={prod} />
                ))
        }
        

        {
            products.length < Totalpage ?          
                    
                <button disabled={loading} onClick={handeClick}>
                    { loading ? <Loader/> : 'Load More'}
                </button> : ''
        }


            { 
                error && 
                    <p>{error}</p>
            }



        </>
    )
}
