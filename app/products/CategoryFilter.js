'use client'
import React from 'react'
import styles from './categoryFilter.module.css'
import { useRouter } from 'next/navigation'

export default function CategoryFilter({Categories, activeCategories}) {




        const router = useRouter();



        const handleCategoryFilter = (slug)=> {

                if(!slug || slug === activeCategories){
                    router.push('/products')
                }
                else{
                    router.push(`/products/${slug}`)
                }
        }


    return (
        <ul className={styles['category-filter']}>

            {Categories.length ? Categories.map((category)=> (



                        <li
                            key={category.slug} 
                            className={activeCategories === category.slug ? styles.active : ''}
                            onClick={()=> handleCategoryFilter(category.slug)}
                            >
                            {category.name}
                        </li>

                
                )) : ''}


            </ul>
        )
    }
