import { useState } from "react";

const Accordion = ({ accordion }) => {
  const { desc, dropdownImg, img, title, id } = accordion;
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <>
      <div className="accordion grid grid-cols-auto-1fr-1fr items-center pb-3 border-b border-gray-800">
        <img src={img} alt="graph" className="w-8 object-contain" />
        <span className="ml-6">{title}</span>
        <button
          className="justify-self-end"
          onClick={() => setShowAccordion(!showAccordion)}
        >
          <img src={dropdownImg} alt="dropdown" />
        </button>
      </div>
      {showAccordion && <p className="py-1 bg-gray-300">{desc}</p>}
    </>
  );
};

export default Accordion;
