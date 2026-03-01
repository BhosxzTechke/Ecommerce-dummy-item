'use client';


import React, { useState } from 'react'
import { useBasket } from '../context/BasketContext';
import styles from './addtobag.module.css'



export default function AddToBag({product}) {


    const {items, AddToBag, RemoveToBag, updateQuantity} = useBasket()


    const itemsInTheBag = items.find(item => item.id == product.id)


    const [quantity, setQuantity] = useState(
    itemsInTheBag ? itemsInTheBag.quantity : 1
    );




    const handleQuantityChange = (newQuantity) => {
            if(newQuantity < 0 ) return;
            if(newQuantity > product.stock) return;
            setQuantity(newQuantity)

            if(itemsInTheBag) {
                updateQuantity(product.id, newQuantity)
            }
    }

        return (


    <div className={styles['add-to-bag']}>
            
        <div className={styles.quantity}>
                    <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="minimal"
                    >
                -

                </button>

                
                        <input disabled value={quantity} />


                <button  
                            onClick={() => handleQuantityChange(quantity + 1)}
                            disabled={quantity >= product.stock}
                            className="minimal"
                            >
                            +
                </button>

        </div>


                {
                itemsInTheBag ? 
                <div>
                    <p>Added to the basket</p>
                    <button onClick={()=> RemoveToBag(product.id) } className='outline'>Remove to the Cart</button>
                </div>
                :  
                
                    <button onClick={()=> AddToBag(product, quantity)}>Add to Bag</button>

                }


        </div>

        )



}
