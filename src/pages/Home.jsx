import { useContext } from "react";
import Card from "../components/Card";
import { HomeContext } from "../context-api/HomeContext";
import Accordion from "../components/Accordion";

const Home = () => {
  const { cardsData, product, accordions } = useContext(HomeContext);
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
      <section className="section-filter px-6 py-5 hidden lg:block">
        <div className="products bg-yellow-300 rounded px-12 py-8 flex justify-center items-center gap-x-16  xl:max-w-7xl xl:m-auto">
          <div className="products__info basis-1/2">
            <p className="products__title text-5xl font-semibold">
              {product?.p_title}
            </p>
            <p className="products__desc mt-6 mb-8 font-normal text-2xl">
              {product?.p_desc}
            </p>
            <button className="bg-orange-400 hover:bg-orange-500 border border-gray-800 rounded-3xl px-3 py-2">
              {product?.p_cta}
            </button>
          </div>
          <div className="products__accordion basis-1/2">
            {accordions?.map((accordion) => (
              <Accordion accordion={accordion} key={accordion.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
