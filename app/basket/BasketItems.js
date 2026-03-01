
'use client'

import React from 'react'
import styles from './basketitems.module.css'
import { useBasket } from '../context/BasketContext'
import Link from 'next/link'
import Image from 'next/image'


export default function BasketItems() {


        const {items,  RemoveToBag, updateQuantity, RemoveAllToBag} = useBasket()


        const RemoveItemInBag = (id) => {

                if(confirm("Are you sure You want to delete it?")) {
                    RemoveToBag(id)
                }
        }


        const RemoveAllItemInCart = () => {

                if(confirm("Are you sure You want to delete All?")) {
                    RemoveAllToBag()
                }
        }

    return (


        <main className='container'>


    { items.length ? 

        <>
            <table className={styles["shopping-bag-table"]}>
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                { 
                    items.map((item) => (

                        <tr key={item.id}>
                            <td>
                                <Image src={item.thumbnail} alt="item image" width={50} height={50} />
                            </td>
                            <td>
                                <Link href={`products/${item.id}`} >{item.title}</Link>
                            </td>

                            <td>
                                {item.price}
                            </td>
                            
                            <td className={styles.quantity}>
                                <div className={styles["actions"]}>
                                    <button 
                                        disabled={item.quantity <= 1}
                                        onClick={()=> updateQuantity(item.id, item.quantity - 1 )}
                                        className={styles.qty}
                                    >
                                        -
                                    </button>
                                    <input type="text" value={item.quantity} disabled />
                                    <button
                                        disabled={item.quantity >= item.stock } 
                                        onClick={()=> updateQuantity(item.id, item.quantity + 1 )}
                                        className={styles.qty}
                                    >
                                        +
                                    </button>
                                </div>
                                
                                <div className={styles["stock"]}>
                                    {item.stock} items in stock
                                </div>

                            </td>
                                    <td>
                                    {(Number(item.quantity) * Number(item.price)).toFixed(2)}
                                    </td>
                            
                            <td>
                                <button onClick={() => RemoveItemInBag(item.id)} title="Remove from basket" className="transparent"> &#x2715; </button>
                            </td>
                        </tr>
        

                    ))}

                        <tr className={styles['grand-total']}>
                            <td colSpan="4"></td>

                                <td colSpan="2">
                                Grand Total: {items
                                    .reduce((total, item) => 
                                    total + item.quantity * item.price, 0
                                    )
                                    .toFixed(2)}
                                </td>
                            
                        </tr>

                </tbody>
            </table>



            <section className={styles["basket-options"]}>
                    <button onClick={() => RemoveAllItemInCart() } className='outline'>Empty Basket</button>
                    <Link href='/'>
                        <button className='outline'>Continue Shopping</button>
                    </Link>
                    <button onClick={()=> alert("Proceed to Checkout")}>
                        Proceed to Checkout
                    </button>
            </section>


        </>
                :   
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h2>You have No Items in the Cart</h2>
                    <Link href="/" style={{ color: "red" }}>Shop</Link>
                </div>
            }
        </main>


    )


}
