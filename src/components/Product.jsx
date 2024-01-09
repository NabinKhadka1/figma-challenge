import Accordion from "../components/Accordion";

const Product = ({product, accordions, largescreen, isShown=false}) => {
  return (
    <section className={`section-filter lg:px-6 lg:py-5 ${largescreen ? 'hidden lg:block':  isShown ?'xs:block lg:hidden':'hidden'} `}> 
      <div className="products bg-yellow-300 rounded px-10 lg:px-20 py-8 flex justify-center items-center gap-x-16  xl:max-w-7xl xl:m-auto">
        <div className="products__info">
          <p className="products__title text-3xl lg:text-5xl font-semibold">
            {product?.p_title}
          </p> 
          <div className="w-full gap-12 xs:flex-col lg:flex lg:justify-between ">

            <div className="flex flex-col mb-4 lg:basis-1/2 xs:mb-8 lg:mb-auto">

                <p className="products__desc mt-6 mb-8 font-normal text-xl lg:text-2xl">
                    {product?.p_desc}
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 border border-gray-800 rounded-3xl px-3 py-2 lg:w-1/2">
                    {product?.p_cta}
                </button>
            </div>

            <div className="products__accordion lg:basis-1/2">
            {accordions?.map((accordion) => (
                <Accordion accordion={accordion} key={accordion.id} />
            ))} 
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Product;
