const Accordion = ({ accordion }) => {
    const { desc, dropdownImg, img, title, id } = accordion;
    return (
      <>
        <div className="accordion grid grid-cols-auto-1fr-1fr items-center pb-3 border-b border-gray-800">
          <img src={img} alt="graph" className="w-8 object-contain" />
          <span className="ml-6">{title}</span>
          <button className="justify-self-end">
            <img src={dropdownImg} alt="dropdown" />
          </button>
        </div>
      </>
    );
  };
  
  export default Accordion;
  