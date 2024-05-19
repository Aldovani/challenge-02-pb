
import { Link } from "react-router-dom";
import { Plants } from "../types/Plants";

type SlideItemProps = {
  plant: Plants;
};

export function SlideItem({ plant }: SlideItemProps) {
  const isInPromotion = !!plant.discountPercentage;
  const actualPrice = parseFloat(plant.price.replace('$', '')) || 0;
  const discount = 1 - plant.discountPercentage / 100 
  const productPrice = isInPromotion ? actualPrice * discount: actualPrice

  return (
    <Link
      to={`/product-details/${plant.id}`}
      className="transition-transform hover:scale-105 bg-white block shadow-card-plant"
    >
      <header>
        <img src={plant.imgUrl} className="max-h-96" alt={plant.name} />
      </header>
      <main className="pt-4 pb-8 px-8">
        <h5 className="font-lato text-primary-lunar-green font-bold text-2xl">
          {plant.name}
        </h5>
        <div className="font-raleway text-base mt-2">
          {isInPromotion ? (
            <>
              <p className="text-primary-lunar-green font-bold">
                Sale Price: ${productPrice.toFixed(2)}
              </p>
              <p className="text-dark-gray line-through">Regular Price: ${actualPrice.toFixed(2)}</p>
            </>
          ) : (
            <p className="text-primary-lunar-green font-bold">
              Price: ${actualPrice.toFixed(2)}
            </p>
          )}
        </div>
        <div>
          <span className="inline-block bg-wisper text-primary-avacado mt-6 px-3 py-1.5 border border-primary-avacado rounded-full">
            {plant.label[0]}
          </span>
        </div>
      </main>
    </Link>
  );
}
