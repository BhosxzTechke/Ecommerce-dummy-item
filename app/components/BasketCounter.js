'use client'

import { useBasket } from "../context/BasketContext"



export default function BasketCounter() {
    const {items} = useBasket()
    


    return (

        items.length ? <span>{items.length}</span> : ''
        
    )
}
