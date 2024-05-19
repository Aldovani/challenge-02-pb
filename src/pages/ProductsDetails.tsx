import { plantsService } from "../services/impls/plants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Plants } from "../types/Plants";
import { Button } from "../Components/Button";

export function ProductDetails() {
  const [plants, setPlants] = useState<Plants | null>(null);
  const { id } = useParams();

  useEffect(() => {
    plantsService.findById(Number(id)).then((plants) => setPlants(plants));
  }, [id]);

  if (!plants) {
    return null;
  }

  const featuresArray = plants.features.split(/\.\s+/);

  return (
    <div className="flex flex-center m-0 md: w-screen">
    <div className="flex flex-col md:flex-row justify-center  items-center gap-x-20 w-full px-5">
      <img className="w-full md:w-[690px] mb-8 md:mb-0" src={plants.imgUrl} alt="plant" />
      <div className="w-full md:w-[693px]">
        <h1 className="text-primary-lunar-green font-eb-garamond text-4xl md:text-6xl">{plants.name}</h1>
        <p className="font-bold text-dark-gray text-lg md:text-[24px]">{plants.subtitle}</p>
        <div className="flex gap-4 md:gap-6 mt-4">
          <div className="inline-block bg-wisper text-primary-avacado px-3 py-1.5 border border-green-6 rounded-full">{plants.label[0]}</div>
          <div className="inline-block bg-wisper text-primary-avacado px-3 py-1.5 border border-green-6 rounded-full">{plants.label[1]}</div>
        </div>
        <p className="my-4 font-bold text-lg md:text-2xl">{plants.price}</p>
        <Button to="/404">
          Check out
        </Button>
        <p className="my-4 font-bold text-lg md:text-2xl">Features</p>
        <ul className="list-disc ml-5 font-raleway">
          {featuresArray.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div>
          <h2 className="my-4 font-bold text-lg md:text-2xl">Description</h2>
          <p>{plants.description}</p>
        </div>
      </div>
    </div>
  </div>  
  );
}
