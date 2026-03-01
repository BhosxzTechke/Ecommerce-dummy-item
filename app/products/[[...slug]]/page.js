
import React from 'react'
import Products from './Products'
import { ErrorBoundary } from '../../components/ErrorBoundary'


        export default async function Page({ params }) {
        const { slug } = await params;

        const category = slug?.[1] || slug?.[0];


        return (
        <>
                <div className="page-header">

                        <h1>Products</h1>
                </div>


                <ErrorBoundary fallback={<p>Something went wrong</p>}>
                        <Products category={category}/>
                </ErrorBoundary>

        </>


)
}
