import { Link } from "react-router-dom";
import { Plants } from "../../types/Plants";

type ItemProps = {
  plant: Plants;
};

export function ProductItem({ plant }: ItemProps) {
  const isInPromotion = !!plant.discountPercentage;

  let actualPrice = 0;
  let discount = 0;

  if (isInPromotion) {
    actualPrice = Number(plant.price);
    discount = plant.discountPercentage / 100;
  }

  return (
    <Link
      to={`/products/${plant.id}`}
      className=" transition-transform hover:scale-105 w-full  bg-white block shadow-card-plant"
    >
      <header>
        <img
          src={plant.imgUrl}
          className="object-cover w-full  h-96 "
          alt={plant.name}
        />
      </header>
      <main className="pt-4 pb-8 px-8">
        <h5 className="font-lato  text-primary-lunar-green font-bold text-2xl">
          {plant.name}
        </h5>
        {isInPromotion ? (
          <div className="flex font-raleway text-base gap-3">
            <p className="text-primary-lunar-green font-raleway text-base">
              ${(actualPrice - actualPrice * discount).toFixed(2)}
            </p>
            <p className="text-dark-gray line-through">${plant.price}</p>
          </div>
        ) : (
          <strong className="font-raleway text-primary-lunar-green font-normal mt-2 block">
            ${plant.price}
          </strong>
        )}
        <div className="flex gap-2">
          {plant.label.map((label) => (
            <span className=" bg-wisper text-primary-avacado mt-6 px-3 py-1.5 border border-primary-avacado rounded-full">
              {label}
            </span>
          ))}
        </div>
      </main>
    </Link>
  );
}
