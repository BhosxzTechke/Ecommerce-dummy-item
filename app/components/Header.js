import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useBasket } from '../context/BasketContext'
import BasketCounter from './BasketCounter';

    export default function Header() {


    return (
        <header className={styles['app-header']}>
            <div className={`${styles.wrapper} container`}>

                <aside>

                <Image src="/iconmeme.png" width={31} height={28} alt='images' />

                </aside>


                <aside>
                    <nav>
                        <ul>
                            <Link href="/"><li>Homepage</li></Link>
                            <Link href="/products"><li>Products</li></Link>
                            <Link href="/basket">
                            <li className={styles.basket}>
                            Shopping Bag
                            <BasketCounter/>
                            </li></Link>

                        </ul>
                    </nav>
                </aside>

            </div>
        </header>
        
        )
    }
