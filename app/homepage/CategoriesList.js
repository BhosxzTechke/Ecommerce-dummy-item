
import React from 'react'
import styles from './categories.module.css'
import Link from 'next/link'

export default async function CategoriesList() {

        let data = await fetch('https://dummyjson.com/products/categories')
        let categories = await data.json()




    return (


            <ul className={styles.wrapper}>
                
                    {categories.map((category) => (

                        <Link key={category.slug} href={`/products/category/${category.slug}`}>

                        <li key={category.slug}>{category.name}</li>

                        </Link>

                    ))}

            </ul> 
            
        
        )
}
