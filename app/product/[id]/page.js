import React from 'react'
import styles from './productpage.module.css'
import Image from 'next/image';
import AddToBag from '@/app/components/AddToBag';



export default async function Page({ params }) {

    const { id } = await params
    let data = await fetch(`https://dummyjson.com/products/${id}`)
    let products = await data.json()

    

    return (

        <div className={`${styles['product-page']} container`}>
            <section className={styles.photo}>
                <Image 
                    src={products.images[0]}
                    height={344}
                    width={344}
                    alt='images'
                /> 
            </section>
            
            <section className={styles.info}>
                <h1>{products.title}</h1>
                <p className={products.price}>$ {products.price}</p>
                <p>{products.description}</p>


            <div className={styles['add-to-bag']}>
                <AddToBag product={products}/>
            </div>

            </section>


        </div>


    )
    
}
