import { plantsService } from "../../services/impls/plants";
import { useState, useEffect } from "react";
import { Plants } from "../../types/Plants";
import SlideItem from "./SlideItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Index() {
  const [plants, setPlants] = useState<Plants[]>([]);

  useEffect(() => {
    plantsService.getAll().then((data) => setPlants(data.data));
  }, []);

  return (
    <>
      <section className="bg-wisper py-20">
        <div className="text-start ">
          <h2 className="text-primary-lunar-green w-full font-eb-garamond text-center font-bold text-[64px]">
            This Weeks Most Popular{" "}
            <span className="text-primary-avacado">And Best Selling</span>
          </h2>

          <div className="  mt-[96px] ml-[100px]">
            <Splide
              options={{
                perPage: 4,
                gap: "1rem",
                drag: "free",
                arrows: false,
                pagination: false,
              }}
            >
              {plants
                .filter((e) => !e.discountPercentage)
                .map((plant) => (
                  <SplideSlide className="p-5 max-w-[390px]" key={plant.id}>
                    <SlideItem plant={plant} />
                  </SplideSlide>
                ))}
            </Splide>
          </div>
        </div>

        <div className="text-start">
          <h2 className="text-primary-avacado font-eb-garamond font-bold text-[64px] mt-[93px] text-center">
            Plants In <span className="text-primary-lunar-green">Sale</span>
          </h2>

          <div className="mt-[96px] ml-[100px]">
            <Splide
              options={{
                perPage: 4,
                gap: "1rem",
                drag: "free",
                arrows: false,
                pagination: false,
              }}
            >
              {plants
                .filter((e) => e.discountPercentage > 0)
                .map((plant) => (
                  <SplideSlide className="p-5 max-w-[390px]" key={plant.id}>
                    <SlideItem plant={plant} />
                  </SplideSlide>
                ))}
            </Splide>
          </div>
        </div>
      </section>
    </>
  );
}
