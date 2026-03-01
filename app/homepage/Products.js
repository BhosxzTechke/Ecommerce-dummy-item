import React from 'react'
import styles from './products.module.css'
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import ProductList from './ProductList';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function Products() {



    return (
        <div className={styles.products}>
            
            <div className={`${styles.wrapper} container`}>

                <h2>Highest Rated products</h2>
                <p>Check out below a curated list of the Products that received</p>

                            <ErrorBoundary fallback={<p>Something went wrong</p>}>
                                    <ProductList/>
                            </ErrorBoundary>

                    <Link href="/products">
                        <button>View all products</button>
                    </Link>
                
                </div>
            </div>



    )
}
