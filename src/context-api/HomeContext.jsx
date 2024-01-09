import {createContext, useEffect, useRef, useState } from "react";
import cards_data from "../db/db";

export const HomeContext = createContext();

export const HomeContextProvider = ({children}) => {
    const [cardsData,setCardsData] = useState(cards_data);
    const [product,setProduct] = useState(cardsData[0]?.products);
    const [accordions,setAccordions] = useState(cardsData[0]?.products?.accordions)
    const buttonRef= useRef([]);

    const [selectedProduct, setselectedProduct] = useState({})
    
    const handleChoice = (id) => {
        const products = cardsData?.filter(card => card.id === id);
        setselectedProduct(products[0]?.products)
    }

    useEffect(()=>{
        setProduct(selectedProduct)
        setAccordions(selectedProduct.accordions)
    },[selectedProduct])

    return (
        <HomeContext.Provider value={{cardsData,handleChoice,product,accordions, buttonRef}}>
            {children}
        </HomeContext.Provider>
    )
}