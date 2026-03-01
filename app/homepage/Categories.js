import React from 'react'
import styles from './categories.module.css'
import CategoriesList from './CategoriesList';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function Categories() {

                return (
                        <div className={styles.categories}>



                        <ErrorBoundary fallback={<p>Something went wrong</p>}>
                                <CategoriesList/>
                        </ErrorBoundary>

                </div>
                
        )
}
