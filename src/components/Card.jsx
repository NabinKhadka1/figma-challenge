import React, { useContext, useState } from "react";
import { HomeContext } from "../context-api/HomeContext";

const Card = ({ card }) => {
  const {handleChoice} = useContext(HomeContext);
  const handleClick = (e,cardId) => {
    e.preventDefault();

    let buttonCta = Array.from(document.querySelectorAll('button.card__cta'));
    buttonCta.forEach(element => {
      element.style.backgroundColor = '#EBECF5'
    })
    let currentElement = document.querySelector(`button.card${cardId}__cta`);
    currentElement.style.backgroundColor = '#FFD540'
    handleChoice(cardId)
  }

  return (
    <div className="card1 rounded shadow-md lg:border lg:border-gray-300">
      <div className="card1__header flex justify-between items-center rounded p-5 w-full xs:shadow-md lg:flex-row-reverse">
        <img src={card.img} alt={card.imgalt} />
        <p className="card1__title">{card.title}</p>
        <button className="lg:hidden">
          <img src={card.imgPlus} alt="plus" />
        </button>
      </div>
      <p className="card1__desc px-6 mb-2 font-medium hidden text-sm lg:flex lg:justify-center lg:items-center">
        {card.desc}
      </p>
      <button className={`card__cta card${card.id}__cta hidden bg-gray-300 hover:bg-yellow-200 lg:rounded-tr-3xl gap-2.5 p-3 w-6/12 lg:flex lg:justify-center lg:items-center`} onClick={(e)=>handleClick(e,card.id)}>
        <span>{card.cta_desc}</span>
        <img src={card.cta_img} alt="downarrow" />
      </button>
    </div>
  );
};

export default Card;
