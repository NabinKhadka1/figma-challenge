import React, { useContext, useEffect, useRef, useState } from "react";
import { HomeContext } from "../context-api/HomeContext";
import Product from "./Product";

const Card = ({ card }) => {
  const [mobClick, setMobClick] = useState(false);
  const { handleChoice, buttonRef} = useContext(HomeContext);
  const btnRef = useRef();

  useEffect(() => {
    buttonRef.current[card.id - 1] = btnRef;
  }, [buttonRef, card]);

  const handleClick = (e, cardId) => {
    e.preventDefault();

    let buttonCta = Array.from(document.querySelectorAll("button.card__cta"));
    buttonCta.forEach((element) => {
      element.style.backgroundColor = "#EBECF5";
    });
    let currentElement = document.querySelector(`button.card${cardId}__cta`);
    currentElement.style.backgroundColor = "#FFD540";
    handleChoice(cardId);
  };

  const mobileHandleClick = (e) => {
    e.preventDefault();
    setMobClick((prev) => !prev);
  }

  return (
    <div className="card1  h-max rounded shadow-md lg:border lg:border-gray-300">
      <div className="card1__header flex justify-between items-center rounded p-5 w-full xs:shadow-md lg:flex-row-reverse">
        <img src={card.img} alt={card.imgalt} />
        <p className="card1__title">{card.title}</p>
        <button
          className="lg:hidden"
          onClick={(e) => mobileHandleClick(e)}
        >
          <img src={card.imgPlus} alt="plus" />
        </button>
      </div>
      <p className="card1__desc px-6 mb-2 font-medium hidden text-sm lg:flex lg:justify-center lg:items-center">
        {card.desc}
      </p>
      <button
        className={`card__cta card${card.id}__cta hidden bg-gray-300 hover:bg-yellow-200 lg:rounded-tr-3xl gap-2.5 p-3 w-6/12 lg:flex lg:justify-center lg:items-center ${card.id == 1 ? "bg-active-button" : "bg-normal-button"}`}
        onClick={(e) => handleClick(e, card.id)}
        ref={btnRef}
      >
        <span>{card.cta_desc}</span>
        <img src={card.cta_img} alt="downarrow" />
      </button>
      <Product largescreen={false} isShown={mobClick} product={card.products} accordions={card.products.accordions}/>
    </div>
  );
};

export default Card;
