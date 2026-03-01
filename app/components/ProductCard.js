import React from 'react'
import styles from './productcard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from './../util/index';




export default function ProductCard({product}) {
    return (


        <Link href={`/product/${product.id}`}>

        <li className={styles['product-card']}>

            <Image 
            src={product.thumbnail} 
            height={226} 
            width={226} 
            alt='images'/>

        <div className={styles.info}>
            <h3>{product.title}</h3>
            <p>{formatPrice(product.price)}</p>

        </div>


        </li>
</Link>

    )
}
