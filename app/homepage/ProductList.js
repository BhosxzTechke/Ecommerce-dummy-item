import React from 'react'
import ProductCard from '../components/ProductCard'
import styles from './product-list.module.css'



const sleep = async ()=> {
        return new Promise(resolve=>setTimeout(resolve,3000))
}


export default async function ProductList() {

    await sleep();
    
    let data = await fetch('https://dummyjson.com/products?limit=12&sortBy=title&order=asc')
    let productData = await data.json()


return (

            <ul className={styles['products-list']}>
                {
                    productData.products.map((prod) => (
                        <ProductCard key={prod.id} product={prod} />
                    ))
                }

            </ul>
    )
}
