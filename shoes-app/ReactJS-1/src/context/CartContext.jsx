import { React, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [panier, setPanier] = useState(() => {
        const savedPanier = localStorage.getItem('panier')
        return savedPanier? JSON.parse(savedPanier) : []
    });

    useEffect(() => {
        localStorage.setItem('panier', JSON.stringify(panier))
    },
        [panier]
    );
    const addToCart = (id) => {
        setPanier((prevPanier) => [...prevPanier, id]);
    }

    const removeFromCart = (id) =>{
        setPanier((prevPanier) => prevPanier.filter(item => item !== id))
    }

    return (
        <CartContext.Provider value={{ panier, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
};