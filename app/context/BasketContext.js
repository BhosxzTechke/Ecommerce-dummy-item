'use client';

import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext();




export function BasketProvider({ children }) {

    const [items, setItems] = useState([]);



    useEffect(()=> {

        const storedItem = localStorage.getItem("basket");
        if(storedItem){
            setItems(JSON.parse(storedItem));
        }
    },  []);


    useEffect(()=> {

        localStorage.setItem("basket", JSON.stringify(items))

        },[items])


    const AddToBag = (product, quantity) => {
        setItems((prevItems)=> {
            if(prevItems.find((items) => items.id === product.id))
                return prevItems

            return [...prevItems, {...product, quantity}]
        })
    }



    const RemoveToBag = (productID) => {
            setItems((prevItem)=> {
            return prevItem.filter(item => item.id != productID)
        });

    }


    
    const RemoveAllToBag = () => {
            setItems([])
    }


    const updateQuantity = (productID, quantity) => {
        setItems((prevItems)=> {

            return prevItems.map((item)=> 
                
                item.id === productID ? {...item, quantity} : item
            )

        })
    }



    return (
            <BasketContext.Provider value={{items, AddToBag, RemoveToBag, updateQuantity, RemoveAllToBag}}>
                {children}
            </BasketContext.Provider>
    );
}

export function useBasket() {
    return useContext(BasketContext)
}