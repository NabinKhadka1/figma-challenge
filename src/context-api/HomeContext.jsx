import {createContext, useState } from "react";
import cards_data from "../db/db";

export const HomeContext = createContext();

export const HomeContextProvider = ({children}) => {
    const [cardsData,setCardsData] = useState(cards_data);
    const [product,setProduct] = useState(cardsData[0].products);
    const [accordions,setAccordions] = useState(cardsData[0].products.accordions)
    const handleChoice = (id) => {
        const products = cardsData?.filter(card => card.id === id);
        setProduct(products[0]?.products);
        setAccordions(products[0]?.products.accordions);
    }
    return (
        <HomeContext.Provider value={{cardsData,handleChoice,product,accordions}}>
            {children}
        </HomeContext.Provider>
    )
}