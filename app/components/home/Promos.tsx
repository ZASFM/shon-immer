import PromoCards from "./PromoCards";

const onPromo = [
  {
    id: 1,
    title: "Grilled Salmon",
    img: "/img/food/salmond.png",
    salesQ: 1100,
    likesN: 100,
    PercentOff: 14,
    price: 9.0,
  },
  {
    id: 2,
    title: "Italian Gulash",
    img: "/img/food/steak.png",
    salesQ: 2200,
    likesN: 100,
    PercentOff: 10,
    price: 8.5,
  },
  {
    id: 3,
    title: "Mojito",
    img: "/img/food/mojito.png",
    salesQ: 770,
    likesN: 100,
    PercentOff: 8,
    price: 7.12,
  },
];

const Promos = () => {
  return (
    <>
      <div className="max-w-2xl my-5 mx-auto text-center">
        <h1 className="text-3xl leading-tight tracking-tight text-gray-600 md:text-4xl">
          Look at the promos!!!
        </h1>
      </div>
      <section className="flex flex-row items-center justify-between md:justify-center gap-4 py-8 my-12 overflow-x-auto">
        {onPromo.map((promo) => {
          return <PromoCards key={promo.id} promo={promo} />;
        })}
      </section>
    </>
  );
};

export default Promos;
