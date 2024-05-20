import { plantsService } from "../../services/impls/plants";
import { useState, useEffect } from "react";
import { Plants } from "../../types/Plants";
import SlideItem from "./SlideItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Index() {
  const [plants, setPlants] = useState<Plants[]>([]);

  useEffect(() => {
    plantsService.getAll({ perPape: 40 }).then((data) => setPlants(data.data));
  }, []);

  return (
    <>
      <section className="bg-wisper py-20 max-sm:px-4">
        <div className="text-start ">
          <h2 className="text-primary-lunar-green w-full font-eb-garamond text-center font-bold lg:text-[64px] sm:text-4xl text-3xl">
            This Weeks Most Popular{" "}
            <span className="text-primary-avacado">And Best Selling</span>
          </h2>

          <div className="mt-[96px] lg:ml-[100px]">
            <Splide
              options={{
                gap: "2rem",
                perPage: 3,
                perMove: 1,
                arrows: false,
                pagination: false,
                breakpoints: {
                  1200: {
                    perPage: 2,
                  },
                  620: {
                    perPage: 1,
                  },
                  420: {
                    width: "320px",
                  },
                },
              }}
            >
              {plants
                .filter((e) => !e.discountPercentage)
                .map((plant) => (
                  <SplideSlide className="p-5 " key={plant.id}>
                    <SlideItem plant={plant} />
                  </SplideSlide>
                ))}
            </Splide>
          </div>
        </div>

        <div className="text-start">
          <h2 className="text-primary-avacado font-eb-garamond font-bold lg:text-[64px] sm:text-4xl text-3xl mt-[93px] text-center">
            Plants In <span className="text-primary-lunar-green">Sale</span>
          </h2>

          <div className="mt-[96px] lg:ml-[100px]">
            <Splide
              options={{
                gap: "2rem",
                perPage: 3,
                perMove: 1,
                arrows: false,
                pagination: false,
                breakpoints: {
                  1200: {
                    perPage: 2,
                  },
                  620: {
                    perPage: 1,
                  },
                  420: {
                    width: "320px",
                  },
                },
              }}
            >
              {plants
                .filter((e) => e.discountPercentage > 0)
                .map((plant) => (
                  <SplideSlide className="p-5" key={plant.id}>
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
