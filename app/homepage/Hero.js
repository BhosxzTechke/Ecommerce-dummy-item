'use client'
import Image from 'next/image'
import React from 'react'
import style from './hero.module.css'

export default function Hero() {
    return (

        <div className={style.Hero}>
            <Image src="/hero.jpg" height={1438} width={527} alt='images' />
            <h2>Our Categories</h2>
        </div>
    )
}
