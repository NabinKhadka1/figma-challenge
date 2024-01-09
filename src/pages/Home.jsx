import { useContext, useEffect } from "react";
import Card from "../components/Card";
import { HomeContext } from "../context-api/HomeContext";
import Product from "../components/Product";

const Home = () => {
  const { cardsData} = useContext(HomeContext);
  const { product, accordions, buttonRef } = useContext(HomeContext);

  useEffect(()=>{
    if(buttonRef.current.length){
      buttonRef.current[0].current.click()  
    }
  },[])
  return (
    <>
      <section className="section px-6 py-6 font-body">
        <div className="section-title text-black-100  flex flex-col justify-center items-center xl:max-w-7xl xl:m-auto">
          <h2 className="section-title__heading text-3xl font-semibold">
            Section title
          </h2>
          <p className="section-title__subheading font-medium text-lg pt-2">
            Section subtitle
          </p>
        </div>
        <div className="cards pt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:max-w-7xl xl:m-auto">
          {cardsData?.map((card) => (
              <Card card={card} key={card.id} />
          ))}
        </div>
      </section>
      <Product largescreen={true} product={product} accordions={accordions}/>
    </>
  );
};

export default Home;
