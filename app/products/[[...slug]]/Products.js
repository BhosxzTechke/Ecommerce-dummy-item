import React from 'react'
import ProductCard from '../../components/ProductCard'
import styles from './product.module.css'
import PaginatedList from './PaginatedList'
import Categories from './../../homepage/Categories';
import CategoryFilter from '../CategoryFilter';



export default async function Products({category}) {

    let data = await fetch(`https://dummyjson.com/products${category ? '/category/' + category : ''}?limit=8`)
    let productData = await data.json()


    
    let cat = await fetch('https://dummyjson.com/products/categories')
    let Categories = await cat.json()

    return (

    <div className={`${styles['products-list']} container`}>

            
            <CategoryFilter Categories={Categories} activeCategories = {category} />

            <ul className={styles.products}>
                <PaginatedList
                    initialPage={productData.products}
                    Totalpage={productData.total}
                    category={category}
                />

            </ul>
            
    </div>
    )
}
