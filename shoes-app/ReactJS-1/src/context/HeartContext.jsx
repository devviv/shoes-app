import { useState, createContext, useEffect } from "react";

export const HeartContext = createContext();

export const HeartProvider = ({ children }) => {
    const [heart, setHeart] = useState(() => {
        const heartSaved = localStorage.getItem('heart')
        return heartSaved ? JSON.parse(heartSaved) : [];
    });

    useEffect(() => {
        localStorage.setItem('heart', JSON.stringify(heart))
    },
        [heart]
    )
    const addHeart = (id) => {
        setHeart((prevHeart) => [...prevHeart, id])
    }

    const removeFromHeart = (id) =>{
        setHeart((prevHeart) => prevHeart.filter(item => item !== id))
    }

    return (
        <HeartContext.Provider value={{ heart, addHeart, removeFromHeart }} >
            {children}
        </HeartContext.Provider>
    )
}
